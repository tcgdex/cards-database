import {Card} from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
      set: Set,
      name: {
         en: "Ampharos",
         ja: "アンファロス",
         fr: "Ampharos",
         de: "Ampharos",
         es: "Ámpharos",
         it: "Ampharos",
         pt: "Ampharos",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [181],
      hp: 90,
      types: ["Lightning"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Lightning"],
          name: {
            en: "Attract Current",
            ja: "電流を引き付けます",
            fr: "Attirer le courant",
            de: "Strom anziehen",
            es: "Atraer corriente",
            it: "Attirare la corrente",
            pt: "Atrair corrente",
          },
          effect: {
            en: "Flip 3 coins. For each heads, you may search your deck for a Lightning Energy card and attach it to 1 of your Lightning Pokemon. Shuffle your deck afterward.",
            ja: "3コインをフリップします。各ヘッドについて、デッキを稲妻エネルギーカードに検索し、1枚の稲妻ポケモンに取り付けることができます。その後、デッキをシャッフルします。",
            fr: "Flip 3 pièces. Pour chaque tête, vous pouvez rechercher votre jeu une carte d'énergie Lightning et la fixer à 1 de votre Pokémon Lightning. Mélanger votre deck par la suite.",
            de: "3 Münzen umdrehen. Für jeden Köpfe können Sie Ihr Deck nach einer Lightning Energy -Karte durchsuchen und an 1 Ihres Blitzpokémons anbringen. Mischen Sie anschließend Ihr Deck.",
            es: "Flip 3 monedas. Para cada cabezal, puede buscar en su mazo una tarjeta de energía Lightning y adjuntarla a 1 de su Pokémon Lightning. Baraja tu mazo después.",
            it: "Flip 3 monete. Per ogni testa, puoi cercare nel tuo mazzo una carta di energia Lightning e attaccarla a 1 del tuo Pokemon Lightning. Shuffle il tuo mazzo in seguito.",
            pt: "Flip 3 moedas. Para cada cabeça, você pode pesquisar no seu baralho um cartão de energia Lightning e conectá -lo a 1 do seu Pokémon Lightning. Afaste seu baralho depois.",
          },
          damage: 20,
        },
        {
          cost: ["Lightning", "Lightning", "Lightning", "Colorless"],
          name: {
            en: "Gigavolt",
            ja: "ギガボルト",
            fr: "Gigavolt",
            de: "Gigavolt",
            es: "Gigavolio",
            it: "Gigvolt",
            pt: "Gigavolt",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 40 damage plus 20 more damage. If tails, this attack does 40 damage and the Defending Pokemon is now Paralyzed.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は40ダメージに加えて20ダメージを与えます。尾の場合、この攻撃は40のダメージを与え、防御ポケモンが麻痺しています。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 40 dégâts plus 20 dégâts supplémentaires. Si Tails, cette attaque fait 40 dégâts et le Pokémon en défense est maintenant paralysé.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 40 Schäden plus 20 weitere Schäden. Wenn Schwänze, verursacht dieser Angriff 40 Schaden und das verteidigende Pokémon ist jetzt gelähmt.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 40 daños más 20 más de daño. Si Tails, este ataque hace 40 daños y el Pokémon defensor ahora está paralizado.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 40 danni più 20 danni in più. Se le code, questo attacco infligge 40 danni e il Pokemon in difesa è ora paralizzato.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 40 danos mais 20 mais danos. Se as caudas, esse ataque causam 40 danos e o pokemon atual está agora paralisado.",
          },
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "holo",
        },
      ],
};
