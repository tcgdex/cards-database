import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
         en: "Latias ex (Delta Species)",
         ja: "Latias ex（デルタ種）",
         fr: "Latias Ex (espèces delta)",
         de: "Latias ex (Delta -Arten)",
         es: "Latias ex (especie delta)",
         it: "Latias ex (Delta Species)",
         pt: "Latias Ex (espécies Delta)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [380],
      hp: 100,
      types: ["Fire"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Fellow Boost",
            ja: "仲間のブースト",
            fr: "Forme Boost",
            de: "Mitschub",
            es: "Compañero impulso",
            it: "Fellow Boost",
            pt: "Companheiro Boost",
          },
          effect: {
            en: "Once during your turn (before your attack), you may attach a basic Energy card from your hand to your Latias, Latias ex, Latios, or Latios ex. If you do, your turn ends. This power can't be used if Latias ex is affected by a Special Condition.",
            ja: "ターン中（攻撃の前）に、手からラティアス、ラティオス、ラティオス、またはラティオスexに基本的なエネルギーカードを添付することができます。もしそうなら、あなたの順番は終わります。 Latias Exが特別な状態の影響を受けている場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte d'énergie de base de votre main à vos Latias, Latias Ex, Latios ou Latios Ex. Si vous le faites, votre tour se termine. Cette puissance ne peut pas être utilisée si Latias Ex est affecté par une condition spéciale.",
            de: "Sobald Sie während Ihres Zuges (vor Ihrem Angriff) sind, können Sie eine grundlegende Energiekarte von Ihrer Hand an Ihre Latias, Latias EX, Latios oder Latios Ex anlegen. Wenn Sie dies tun, endet Sie an der Reihe. Diese Leistung kann nicht verwendet werden, wenn Latias EX von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno (antes de su ataque), puede adjuntar una tarjeta de energía básica de su mano a su latias, latias ex, latios o latios ex. Si lo haces, tu turno termina. Esta potencia no se puede usar si Latias ex se ve afectada por una condición especial.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), puoi allegare una scheda energetica di base dalla tua mano a Latias, Latias Ex, Latios o Latios Ex. Se lo fai, il tuo turno finisce. Questa potenza non può essere utilizzata se Latias Ex è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode anexar um cartão de energia básico da sua mão ao Latias, Latias Ex, Latios ou Latios Ex. Se o fizer, sua vez termina. Esse poder não pode ser usado se Latias ex for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Fire", "Fire", "Colorless"],
          name: {
            en: "Power Crush",
            ja: "パワークラッシュ",
            fr: "Coup de pouce",
            de: "Power Crush",
            es: "Aplastamiento de poder",
            it: "Crush di potenza",
            pt: "Esmagamento de poder",
          },
          effect: {
            en: "If the Defending Pokemon is Knocked Out by this attack, discard 2 Fire Energy attached to Latias ex.",
            ja: "防御ポケモンがこの攻撃によってノックアウトされた場合、Latias Exに取り付けられた2つの火エネルギーを捨ててください。",
            fr: "Si le Pokémon en défense est assommé par cette attaque, jetez l'énergie de feu 2 attachée à Latias Ex.",
            de: "Wenn das verteidigende Pokémon durch diesen Angriff ausgeschaltet wird, verwerfen Sie 2 Feuerenergie an Latias ex.",
            es: "Si el Pokémon defensor es noqueado por este ataque, deseche 2 energía de fuego unida a Latias Ex.",
            it: "Se il Pokemon in difesa viene eliminato da questo attacco, scartare 2 energia di fuoco attaccata a Latias Ex.",
            pt: "Se o Pokémon atual for nocauteado por esse ataque, descarte 2 energia de incêndio ligada ao Latias Ex.",
          },
          damage: 90,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
