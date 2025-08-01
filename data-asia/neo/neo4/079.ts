import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Tyranitar",
         ja: "ダークタイラナター",
         fr: "Tyranitar noir",
         de: "Dunkler Tyranitar",
         es: "Tiranitaria oscura",
         it: "Tyranitar scuro",
         pt: "Tyranitar escuro",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [248],
      hp: 90,
      types: ["Fighting"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Fighting"],
          name: {
            en: "Mountain Smasher",
            ja: "マウンテンスマッシャー",
            fr: "Smasher de montagne",
            de: "Mountain Smasher",
            es: "Stramer de montaña",
            it: "Smasher di montagna",
            pt: "Mountain Smasher",
          },
          effect: {
            en: "Flip a number of coins equal to the number of Fighting Energy cards attached to Dark Tyranitar. This attack does 20 damage times the number of heads. Then, for each heads, discard the top card from your opponent's deck.",
            ja: "ダークティラニタルに取り付けられたファイティングエネルギーカードの数に等しい多数のコインをひっくり返します。この攻撃は、ヘッド数の20倍のダメージを与えます。次に、ヘッドごとに、対戦相手のデッキから一番上のカードを捨てます。",
            fr: "Retournez un certain nombre de pièces égales au nombre de cartes d'énergie de combat attachées à Dark Tyranitar. Cette attaque fait 20 dégâts de temps le nombre de têtes. Ensuite, pour chaque tête, jetez la carte supérieure du jeu de votre adversaire.",
            de: "Drehen Sie eine Reihe von Münzen um, die der Anzahl der an dunklen Tyranitar angeschlossenen Kampfenergiekarten entsprechen. Dieser Angriff verursacht 20 Schadenszeiten der Anzahl der Köpfe. Entsorgen Sie dann für jeden Köpfe die obere Karte vom Deck Ihres Gegners.",
            es: "Voltee una serie de monedas igual al número de tarjetas de energía de lucha unidas a la tiranitar oscura. Este ataque hace 20 veces el número de cabezas. Luego, para cada cabezal, deseche la carta superior del mazo de tu oponente.",
            it: "Capovolgi una serie di monete pari al numero di carte di energia di combattimento attaccate al tiranitar scuro. Questo attacco fa 20 danni il numero di teste. Quindi, per ogni testa, scartare la carta superiore dal mazzo del tuo avversario.",
            pt: "Vire uma série de moedas iguais ao número de cartões de energia de combate anexados ao Tyranitar escuro. Este ataque causa 20 danos vezes o número de cabeças. Em seguida, para cada cabeça, descarte a carta superior do baralho do seu oponente.",
          },
        },
        {
          cost: ["Fighting", "Fighting", "Fighting", "Colorless"],
          name: {
            en: "Fling Away",
            ja: "逃げ出します",
            fr: "S'éloigner",
            de: "Wegschleudern",
            es: "Escabullirse",
            it: "Fring Away",
            pt: "Se afastar",
          },
          effect: {
            en: "If your opponent has any Benched Pokemon, this attack does 30 damage instead of 50 and choose 1 of those Benched Pokemon. This attack does 30 damage to that Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "相手がベンチポケモンを持っている場合、この攻撃は50ではなく30のダメージを与え、それらのベンチポケモンの1つを選択します。この攻撃は、そのポケモンに30のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Si votre adversaire a des pokémon bancés, cette attaque fait 30 dégâts au lieu de 50 et choisissez 1 de ces Pokémon bancés. Cette attaque fait 30 dégâts à ce Pokémon. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wenn Ihr Gegner ein Bank -Pokémon hat, verursacht dieser Angriff 30 Schaden anstelle von 50 und wählt 1 dieser Bankpokémon aus. Dieser Angriff schädigt dieses Pokémon 30. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Si tu oponente tiene algún Pokémon de banca, este ataque hace 30 daños en lugar de 50 y elige 1 de esos Pokémon de banca. Este ataque hace 30 daños a ese Pokémon. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Se il tuo avversario ha un Pokemon in panchina, questo attacco fa 30 danni anziché 50 e sceglie 1 di quei Pokemon in panchina. Questo attacco infligge 30 danni a quel Pokemon. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Se o seu oponente tiver algum Pokémon em banco, esse ataque causará 30 danos em vez de 50 e escolher 1 daqueles Pokémon em banco. Este ataque causa 30 danos a esse Pokémon. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 50,
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "holo",
        },
      ],
};
