import {Card} from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
      set: Set,
      name: {
         en: "Jumpluff",
         ja: "ジャンプラフ",
         fr: "Jumeau",
         de: "Jumpluff",
         es: "Jumpluff",
         it: "Jumpuff",
         pt: "JumPluff",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [189],
      hp: 70,
      types: ["Grass"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Evolutionary Spore",
            ja: "進化の胞子",
            fr: "Spores évolutifs",
            de: "Evolutionssporen",
            es: "Espora evolutivo",
            it: "Spora evolutiva",
            pt: "Esporo evolutivo",
          },
          effect: {
            en: "Choose any number of your Hoppips and Skiplooms. Then, for each Pokemon you chose in this way, you may search your deck for a card that evolves from that Pokemon and attach it to that Pokemon. (This counts as evolving those Pokemon.) Shuffle your deck afterward.",
            ja: "ホッピップとスキップルームの数を選択してください。次に、この方法で選択したポケモンごとに、そのポケモンから進化するカードをデッキで検索し、そのポケモンに取り付けることができます。 （これはそれらのポケモンを進化させるものとしてカウントされます。）その後、デッキをシャッフルします。",
            fr: "Choisissez n'importe quel nombre de vos hoppips et skiplooms. Ensuite, pour chaque pokemon que vous avez choisi de cette manière, vous pouvez rechercher votre jeu une carte qui évolue à partir de ce pokemon et la fixer à ce pokemon. (Cela compte comme évoluant ces Pokémon.) Tandez votre deck par la suite.",
            de: "Wählen Sie eine beliebige Anzahl Ihrer Hoppips und Skiplooms. Für jedes Pokemon, das Sie auf diese Weise ausgewählt haben, können Sie Ihr Deck nach einer Karte durchsuchen, die sich von diesem Pokémon entwickelt und es an diesem Pokémon befestigt. (Dies gilt als die Entwicklung dieser Pokemon.) Mischen Sie danach Ihr Deck.",
            es: "Elija cualquier número de sus toppips y olor a los saltos. Luego, para cada Pokémon que eligió de esta manera, puede buscar en su mazo una carta que evoluciona de ese Pokémon y adjuntarlo a ese Pokémon. (Esto cuenta como evolucionando a esos Pokémon). Arriba tu mazo después.",
            it: "Scegli un numero qualsiasi del tuo hoppips e skiploom. Quindi, per ogni Pokemon che hai scelto in questo modo, puoi cercare nel tuo mazzo una carta che si evolve da quel Pokemon e attaccarlo a quel Pokemon. (Questo conta come in evoluzione di quei Pokemon.) Shuffle il tuo mazzo in seguito.",
            pt: "Escolha qualquer número de seus hoppips e skiplooms. Então, para cada Pokémon que você escolheu dessa maneira, você pode pesquisar no seu baralho uma carta que evolui daquele Pokemon e o anexar a esse Pokemon. (Isso conta como evoluindo aqueles Pokémon.) Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Grass"],
          name: {
            en: "Solarbeam",
            ja: "SolarBeam",
            fr: "Solaire",
            de: "Solarbeam",
            es: "Rayo solar",
            it: "Solarbeam",
            pt: "SolarBeam",
          },
          damage: 30,
        },
      ],


      variants: [
        {
          type: "holo",
        },
      ],
};
