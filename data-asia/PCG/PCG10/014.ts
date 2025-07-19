import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Blaziken",
         ja: "ブラジケン",
         fr: "Blaziken",
         de: "Blaziken",
         es: "Blaziken",
         it: "Blaziken",
         pt: "Blaziken",
      },

      rarity: "Unknown",
      category: "Pokemon",
      dexId: [257],
      hp: 100,
      types: ["Fire"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Firestarter",
            ja: "Firestarter",
            fr: "Firestarter",
            de: "Firestarter",
            es: "Firestarter",
            it: "Firestarter",
            pt: "Firestarter",
          },
          effect: {
            en: "Once during your turn (before your attack), you may attach a Fire Energy card from your discard pile to 1 of your Benched PokÃ©mon. This power can't be used if Blaziken is affected by a Special Condition.",
            ja: "ターン中に（攻撃の前）、廃棄パイルからベンチポカモンの1つにファイアエネルギーカードを取り付けることができます。 Blazikenが特別な状態の影響を受ける場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte d'énergie de feu de votre tas de défausse à 1 de votre poké banc. Ce pouvoir ne peut pas être utilisé si Blaziken est affecté par une condition spéciale.",
            de: "Sobald Sie während Ihres Zuges (vor Ihrem Angriff) sind, können Sie eine Brandenergiekarte von Ihrem Ablagerungsstapel an 1 Ihres Bank -Poké -Mons anbringen. Diese Kraft kann nicht verwendet werden, wenn Blaziken von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno (antes de su ataque), puede adjuntar una tarjeta de energía de fuego desde su pila de descarte a 1 de su banca Poké Mon. Esta potencia no se puede usar si Blaziken se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), puoi attaccare una scheda di energia di fuoco dalla pila di scarto a 1 del tuo poké mon. Questa potenza non può essere utilizzata se Blaziken è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode anexar um cartão de energia de incêndio da sua pilha de descarte a 1 de seu Poké de bancada. Esse poder não pode ser usado se Blaziken for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Fire", "Colorless", "Colorless"],
          name: {
            en: "Fire Stream",
            ja: "火の流れ",
            fr: "Ruissellement des incendies",
            de: "Feuerströme",
            es: "Corriente de fuego",
            it: "Flusso di fuoco",
            pt: "Fluxo de incêndio",
          },
          effect: {
            en: "Discard a Fire Energy card attached to Blaziken. This attack does 10 damage to each of your opponent's Benched Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "Blazikenに取り付けられた消防エネルギーカードを廃棄します。この攻撃は、相手のベンチポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Jeter une carte d'énergie de feu attachée à Blaziken. Cette attaque inflige 10 dégâts à chacun des pokemon bancés de votre adversaire. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Legen Sie eine an Blaziken befestigte Brandenergiekarte ab. Dieser Angriff schädigt 10 das Bankpokémon Ihres Gegners. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Deseche una tarjeta de energía de fuego unida a Blaziken. Este ataque hace 10 daños a cada Pokémon de banca de tu oponente. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Scartare una carta di energia antincendio attaccata a Blaziken. Questo attacco infligge 10 danni a ciascuno dei Pokemon in panchina del tuo avversario. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Descarte um cartão de energia de incêndio preso a Blaziken. Este ataque causa 10 danos a Pokémon com bancada do seu oponente. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 50,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
