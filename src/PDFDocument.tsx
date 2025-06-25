import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

type OrchestraFormData = {
  orgaoEletronico?: number;
  violino?: number;
  viola?: number;
  violoncelo?: number;
  flautaTransversal?: number;
  oboe?: number;
  oboeDAmore?: number;
  corneIngles?: number;
  fagote?: number;
  clarinete?: number;
  clarineteAlto?: number;
  clarineteBaixo?: number;
  saxofoneSoprano?: number;
  saxofoneAlto?: number;
  saxofoneTenor?: number;
  saxofoneBaritono?: number;
  trompeteCornet?: number;
  flugelhorn?: number;
  trompa?: number;
  tromboneTrombonito?: number;
  baritono?: number;
  eufonio?: number;
  tuba?: number;
  hinos: number[];
  maestros: string[];
  observacoes?: string;
};

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 30,
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 14,
    marginBottom: 10,
    fontWeight: "bold",
  },
  table: {
    display: "flex",
    flexDirection: "column",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCol: {
    flex: 1,
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCell: {
    margin: "auto",
    marginTop: 5,
    marginBottom: 5,
    fontSize: 10,
  },
  totalCol: {
    flex: 1,
    borderStyle: "solid",
    borderWidth: 1,
    borderTopWidth: 0,
  },
  list: {
    fontSize: 10,
    marginBottom: 5,
  },
});

const PDFDocument = ({ data }: { data: OrchestraFormData }) => {
  const instruments = [
    { key: "orgaoEletronico", label: "Organistas" },
    { key: "violino", label: "Violino" },
    { key: "viola", label: "Viola" },
    { key: "violoncelo", label: "Violoncelo" },
    { key: "flautaTransversal", label: "Flauta Transversal" },
    { key: "oboe", label: "Oboé" },
    { key: "oboeDAmore", label: "Oboé d'Amore" },
    { key: "corneIngles", label: "Corne Inglês" },
    { key: "fagote", label: "Fagote" },
    { key: "clarinete", label: "Clarinete" },
    { key: "clarineteAlto", label: "Clarinete Alto" },
    { key: "clarineteBaixo", label: "Clarinete Baixo" },
    { key: "saxofoneSoprano", label: "Saxofone Soprano" },
    { key: "saxofoneAlto", label: "Saxofone Alto" },
    { key: "saxofoneTenor", label: "Saxofone Tenor" },
    { key: "saxofoneBaritono", label: "Saxofone Barítono" },
    { key: "trompeteCornet", label: "Trompete/Cornet" },
    { key: "flugelhorn", label: "Flugelhorn" },
    { key: "trompa", label: "Trompa" },
    { key: "tromboneTrombonito", label: "Trombone/Trombonito" },
    { key: "baritono", label: "Barítono" },
    { key: "eufonio", label: "Eufônio" },
    { key: "tuba", label: "Tuba" },
  ];

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>Relatório da Orquestra</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Instrumentos</Text>
          <View style={styles.table}>
            {instruments.map((instrument) => {
              const value = data[
                instrument.key as keyof OrchestraFormData
              ] as number;
              if (value) {
                return (
                  <View style={styles.tableRow} key={instrument.key}>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>{instrument.label}</Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>{value}</Text>
                    </View>
                  </View>
                );
              }
              return null;
            })}
          </View>
          <View style={styles.tableRow}>
            <View style={[styles.totalCol, { borderRightWidth: 0 }]}>
              <Text style={[styles.tableCell, { fontWeight: "bold" }]}>
                Total Geral
              </Text>
            </View>
            <View style={styles.totalCol}>
              <Text style={[styles.tableCell, { fontWeight: "bold" }]}>
                {instruments.reduce((total, instrument) => {
                  const value = data[
                    instrument.key as keyof OrchestraFormData
                  ] as number;
                  return total + Number(value || 0);
                }, 0)}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Hinos</Text>
          {data.hinos.map((hino, index) => (
            <Text key={index} style={styles.list}>
              Hino {hino}
            </Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Maestros</Text>
          {data.maestros.map((maestro, index) => (
            <Text key={index} style={styles.list}>
              {maestro}
            </Text>
          ))}
        </View>

        {data.observacoes && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Observações</Text>
            <Text style={styles.list}>{data.observacoes}</Text>
          </View>
        )}
      </Page>
    </Document>
  );
};

export default PDFDocument;
