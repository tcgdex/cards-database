import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         en: "Nidoqueen - 010/088",
         ja: "nidoqueen -010/088",
         fr: "NidoQueen - 010/088",
         de: "Nidoqueen - 010/088",
         es: "Nidoqueen - 010/088",
         it: "Nidoqueen - 010/088",
         pt: "NIDOQUEEN - 010/088",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [31],
      hp: 110,
      types: ["Grass"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Evolution Helper",
            ja: "進化ヘルパー",
            fr: "Evolution Helper",
            de: "Evolution Helfer",
            es: "Evolution ayudante",
            it: "Evolution Helper",
            pt: "Ajudante de evolução",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, if Nidoqueen is on your Bench, you may search your deck for a card that evolves from your Active Pokmon and attach it to your Active Pokmon. (This counts as evolving that Pokmon.) Shuffle your deck afterward.",
            ja: "順番<em>（攻撃の前）</em> </em>、Nidoqueenがベンチにある場合、アクティブなPokmonから進化するカードをデッキで検索し、アクティブなPokmonに取り付けることができます。 （これはポクモンの進化としてカウントされます。）その後、デッキをシャッフルします。",
            fr: "Une fois pendant votre tour <em> (Avant votre attaque) </em>, si Nidocheen est sur votre banc, vous pouvez rechercher votre jeu une carte qui évolue à partir de votre pokmon actif et le fixer à votre pokmon actif. (Cela compte comme évoluant ce pokmon.) Tandez votre deck par la suite.",
            de: "Einmal in Ihrem Zug <em> (vor Ihrem Angriff) </em>, wenn sich Nidoqueen auf Ihrer Bank befindet, können Sie Ihr Deck nach einer Karte durchsuchen, die sich von Ihrem aktiven Pokmon entwickelt und an Ihrem aktiven Pokmon befestigt. (Dies zählt so, als würde sich das Pokmon weiterentwickeln.) Mischen Sie danach Ihr Deck.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, si Nidoqueen está en su banco, puede buscar en su mazo una carta que evolucione de su Pokmon activo y adjuntarlo a su Pokmon activo. (Esto cuenta como evolucionando ese pokmon.) Archene tu mazo después.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, se Nidoqueen è in panchina, puoi cercare nel tuo mazzo una carta che si evolve dal tuo Pokmon attivo e attaccarlo al tuo Pokmon attivo. (Questo conta come in evoluzione di quel Pokmon.) Shuffle il tuo mazzo in seguito.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, se o NidoQueen estiver em seu banco, você poderá pesquisar um cartão para um cartão que evolui do seu Pokmon ativo e conectá -lo ao seu Pokmon ativo. (Isso conta como evoluindo esse Pokmon.) Afaste seu baralho depois.",
          },
      }],

      attacks: [
        {
          cost: ["Grass", "Colorless", "Colorless"],
          name: {
            en: "Double Claw",
            ja: "二重爪",
            fr: "Griffe",
            de: "Doppelklaue",
            es: "Garra doble",
            it: "Doppio artiglio",
            pt: "Garra dupla",
          },
          effect: {
            en: "Flip 2 coins. This attack does 30 damage plus 20 more damage for each heads",
            ja: "2つのコインをフリップします。この攻撃は30のダメージとヘッドごとに20のダメージを与えます",
            fr: "Flip 2 pièces. Cette attaque fait 30 dégâts plus 20 dégâts supplémentaires pour chaque tête",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 30 Schäden plus 20 weitere Schäden für jeden Köpfe",
            es: "Flip 2 monedas. Este ataque hace 30 daños más 20 más de daño para cada cabezal.",
            it: "Flip 2 monete. Questo attacco infligge 30 danni più 20 danni per ogni testa",
            pt: "Flip 2 moedas. Este ataque causa 30 danos mais 20 mais danos para cada cabeça",
          },
        },
      ],

      retreat: 3,

};
