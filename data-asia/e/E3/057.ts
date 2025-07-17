import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
      set: Set,
      name: {
         en: "Sudowoodo - 057/087",
         ja: "Sudowoodo -057/087",
         fr: "Sudowoodo - 057/087",
         de: "Sudowoodo - 057/087",
         es: "Sudowoodo - 057/087",
         it: "Sudowoodo - 057/087",
         pt: "SUDOWOODO - 057/087",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [185],
      hp: 60,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Copy",
            ja: "コピー",
            fr: "Copie",
            de: "Kopie",
            es: "Copiar",
            it: "Copia",
            pt: "Cópia",
          },
          effect: {
            en: "Choose 1 of the Defending Pokemon's attacks. Copy copies that attack. This attack does nothing if Sudowoodo doesn't have the Energy necessary to use that attack. (You must still do anything else required in order to use that attack.)",
            ja: "防御ポケモンの攻撃の1つを選択します。その攻撃をコピーします。 Sudowoodoにその攻撃を使用するのに必要なエネルギーがない場合、この攻撃は何もしません。 （その攻撃を使用するために必要な他のことをまだしなければなりません。）",
            fr: "Choisissez 1 des attaques de Pokémon en défense. Copiez des copies de cette attaque. Cette attaque ne fait rien si Sudowoodo n'a pas l'énergie nécessaire pour utiliser cette attaque. (Vous devez toujours faire tout ce qui est requis pour utiliser cette attaque.)",
            de: "Wählen Sie 1 der Angriffe des Verteidigungspokemons. Kopieren Kopien diesen Angriff. Dieser Angriff tut nichts, wenn Sudowoodo nicht über die Energie verfügt, die erforderlich ist, um diesen Angriff zu nutzen. (Sie müssen noch alles tun, was erforderlich ist, um diesen Angriff zu verwenden.)",
            es: "Elija 1 de los ataques defensores de Pokémon. Copie copias que ataquen. Este ataque no hace nada si Sudowoodo no tiene la energía necesaria para usar ese ataque. (Todavía debe hacer cualquier otra cosa que se requiera para usar ese ataque).",
            it: "Scegli 1 degli attacchi del Pokemon in carica. Copia copie quell'attacco. Questo attacco non fa nulla se Sudowoodo non ha l'energia necessaria per usare quell'attacco. (Devi ancora fare qualsiasi altra cosa richiesta per usare quell'attacco.)",
            pt: "Escolha 1 dos ataques de Pokémon em defesa. Copie cópias que ataques. Esse ataque não faz nada se Sudowoodo não tiver a energia necessária para usar esse ataque. (Você ainda deve fazer qualquer outra coisa necessária para usar esse ataque.)",
          },
        },
        {
          cost: ["Fighting"],
          name: {
            en: "Energy Draw",
            ja: "エネルギーの引き分け",
            fr: "Tirage d'énergie",
            de: "Energieabnahme",
            es: "Sorteo",
            it: "Disegna di energia",
            pt: "Desenho de energia",
          },
          effect: {
            en: "Search your deck for a basic Energy card and attach it to Sudowoodo. Shuffle your deck afterward.",
            ja: "デッキを検索して、基本的なエネルギーカードを調べ、sudowoodoに添付してください。その後、デッキをシャッフルします。",
            fr: "Recherchez votre jeu pour une carte d'énergie de base et attachez-la à Sudowoodo. Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach einer grundlegenden Energiekarte und fügen Sie sie an Sudowoodo hinzu. Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo una tarjeta de energía básica y adjuntarla a Sudowoodo. Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo una carta energetica di base e attaccalo a Sudowoodo. Shuffle il tuo mazzo in seguito.",
            pt: "Pesquise seu baralho em busca de um cartão de energia básico e anexe -o a Sudowoodo. Afaste seu baralho depois.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
