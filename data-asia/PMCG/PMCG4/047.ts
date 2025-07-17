import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Meowth",
         ja: "meowth",
         fr: "Miaulement",
         de: "Meowth",
         es: "Maullido",
         it: "Meowth",
         pt: "MEOWTH",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [52],
      hp: 40,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Coin Hurl",
            ja: "コインハール",
            fr: "Pièce de monnaie",
            de: "Münze Hurl",
            es: "Moneda",
            it: "Moneta Hurl",
            pt: "Lançador de moedas",
          },
          effect: {
            en: "Choose 1 of your opponent's Pokemon and flip a coin. If heads, this attack does 20 damage to that Pokemon. Don't apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)",
            ja: "対戦相手のポケモンを1つ選択し、コインをひっくり返します。頭の場合、この攻撃はそのポケモンに20のダメージを与えます。この攻撃に衰弱と抵抗を適用しないでください。 （衰弱と抵抗を適用した後に発生する他の効果はまだ起こります。）",
            fr: "Choisissez 1 du pokemon de votre adversaire et retournez une pièce. Si la tête, cette attaque fait 20 dégâts à ce Pokémon. N'appliquez pas la faiblesse et la résistance pour cette attaque. (Tout autre effet qui se produirait après avoir appliqué une faiblesse et une résistance se produit.)",
            de: "Wählen Sie 1 der Pokemon Ihres Gegners und drehen Sie eine Münze. Wenn dieser Angriff dieses Pokémon 20 Schaden zufügt. Wenden Sie keine Schwäche und Widerstand für diesen Angriff an. (Alle anderen Effekte, die nach der Anwendung von Schwächen und Widerstand auftreten würden.)",
            es: "Elija 1 de los pokemon de tu oponente y voltea una moneda. Si se dirige, este ataque hace 20 daños a ese Pokémon. No aplique debilidad y resistencia para este ataque. (Cualquier otro efecto que suceda después de aplicar debilidad y resistencia aún ocurre).",
            it: "Scegli 1 del Pokemon del tuo avversario e capovolgi una moneta. Se la testa, questo attacco infligge 20 danni a quel pokemon. Non applicare debolezza e resistenza per questo attacco. (Qualsiasi altro effetto che si verificherebbe dopo aver applicato la debolezza e la resistenza.)",
            pt: "Escolha 1 do Pokémon do seu oponente e vire uma moeda. Se as cabeças, esse ataque causam 20 danos a esse Pokémon. Não aplique fraqueza e resistência a este ataque. (Quaisquer outros efeitos que aconteceriam após aplicar fraqueza e resistência ainda acontecem.)",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
