import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
      set: Set,
      name: {
         en: "Exeggutor - 014/087",
         ja: "exeggutor -014/087",
         fr: "Exagutor - 014/087",
         de: "Exeggutor - 014/087",
         es: "Exeggutor - 014/087",
         it: "Exeggutor - 014/087",
         pt: "Exeggutor - 014/087",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [103],
      hp: 80,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Super Eggsplosion",
            ja: "スーパーエッグスロシオン",
            fr: "Superplosion d'oeufs",
            de: "Super Eggsplosion",
            es: "Super Eggsplosion",
            it: "Super Eggsplosion",
            pt: "Super Eggsplosion",
          },
          effect: {
            en: "Discard any number of Energy cards attached to any number of your Pokemon. Flip a number of coins equal to the number of Energy cards discarded this way. This attack does 40 damage times the number of heads.",
            ja: "ポケモンの任意の数に接続されたエネルギーカードを任意の数に捨てます。この方法で破棄されたエネルギーカードの数に等しい数のコインをひっくり返します。この攻撃は、ヘッド数の40回のダメージ倍になります。",
            fr: "Jeter n'importe quel nombre de cartes d'énergie attachées à n'importe quel nombre de vos Pokémon. Retournez un certain nombre de pièces égales au nombre de cartes d'énergie jetées de cette façon. Cette attaque fait 40 dégâts de temps le nombre de têtes.",
            de: "Verwerfen Sie eine beliebige Anzahl von Energiekarten, die an eine beliebige Anzahl Ihres Pokémon angeschlossen sind. Drehen Sie eine Reihe von Münzen um, die der Anzahl der auf diese Weise verworfenen Energiekarten entsprechen. Dieser Angriff verursacht 40 Schadenszeiten der Anzahl der Köpfe.",
            es: "Deseche cualquier cantidad de tarjetas de energía adjuntas a cualquier número de su Pokémon. Voltee una serie de monedas igual al número de tarjetas de energía descartadas de esta manera. Este ataque hace 40 veces el número de cabezas.",
            it: "Scartare qualsiasi numero di carte di energia collegate a qualsiasi numero del tuo Pokemon. Ribalta una serie di monete pari al numero di carte di energia scartate in questo modo. Questo attacco fa 40 danni il numero di teste.",
            pt: "Descarte qualquer número de cartões de energia anexados a qualquer número de seu Pokémon. Vire uma série de moedas iguais ao número de cartões de energia descartados dessa maneira. Este ataque causa 40 danos vezes o número de cabeças.",
          },
        },
        {
          cost: ["Grass"],
          name: {
            en: "Called Shot",
            ja: "ショットと呼ばれます",
            fr: "Appelé tir",
            de: "Schuss genannt",
            es: "Llamado disparo",
            it: "Chiamato shot",
            pt: "Chamado de tiro",
          },
          effect: {
            en: "Choose 1 of your opponent's Benched Pokemon. This attack does 10 damage times the amount of Grass energy attached to Exeggutor. (Don't apply Weakness or Resistance for Benched Pokemon.)",
            ja: "対戦相手のベンチポケモンを1つ選択します。この攻撃は、exeggutorに取り付けられた草のエネルギーの量を10回ダメージします。 （ベンチポケモンに衰弱や抵抗を適用しないでください。）",
            fr: "Choisissez 1 des Pokémon bancés de votre adversaire. Cette attaque fait 10 dégâts la quantité d'énergie de l'herbe attachée à l'exagutateur. (N'appliquez pas la faiblesse ou la résistance des Pokémon bancés.)",
            de: "Wählen Sie 1 der Bankpokémon Ihres Gegners. Dieser Angriff schädigt 10 Mal die Menge an Grasenergie, die an Exeggutor angebracht ist. (Wenden Sie keine Schwäche oder Widerstand für Bank -Pokémon an.)",
            es: "Elija 1 de los Pokémon de banca de tu oponente. Este ataque hace 10 tiempos de daño la cantidad de energía de hierba unida a Exeggutor. (No aplique debilidad o resistencia para los Pokémon de banca).",
            it: "Scegli 1 del Pokemon in panchina del tuo avversario. Questo attacco fa 10 danni volte la quantità di energia dell'erba attaccata a Exeggutor. (Non applicare debolezza o resistenza per i Pokemon in panchina.)",
            pt: "Escolha 1 do Pokémon bancado do seu oponente. Este ataque causa 10 danos vezes a quantidade de energia da grama anexada ao exeggutor. (Não aplique fraqueza ou resistência a Pokemon com bancada.)",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
