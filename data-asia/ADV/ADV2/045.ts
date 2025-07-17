import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
         en: "Mawile",
         ja: "マウィール",
         fr: "Mawile",
         de: "Mawile",
         es: "Mawile",
         it: "Mawile",
         pt: "Mawile",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [303],
      hp: 60,
      types: ["Metal"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Scam",
            ja: "詐欺",
            fr: "Arnaque",
            de: "Betrug",
            es: "Estafa",
            it: "Truffa",
            pt: "Fraude",
          },
          effect: {
            en: "Look at your opponent's hand. You may have your opponent shuffle a Supporter card you find there into his or her deck. If you do, your opponent draws a card.",
            ja: "相手の手を見てください。あなたはあなたが彼または彼女のデッキにそこにあるサポーターカードをシャッフルさせるかもしれません。もしそうなら、相手はカードを描きます。",
            fr: "Regardez la main de votre adversaire. Vous pouvez demander à votre adversaire de mélanger une carte supportez que vous y trouverez dans son deck. Si vous le faites, votre adversaire tire une carte.",
            de: "Schauen Sie sich die Hand Ihres Gegners an. Möglicherweise lassen Sie Ihren Gegner eine Unterstützerkarte mischen, die Sie dort in sein Deck finden. Wenn Sie dies tun, zeichnet Ihr Gegner eine Karte.",
            es: "Mira la mano de tu oponente. Es posible que tu oponente baraja una carta de seguidores que encuentras allí en su mazo. Si lo haces, tu oponente dibuja una carta.",
            it: "Guarda la mano del tuo avversario. Potresti avere il tuo avversario shuffle una carta sostenitrice che trovi lì nel suo mazzo. Se lo fai, il tuo avversario disegna una carta.",
            pt: "Olhe para a mão do seu oponente. Você pode ter seu oponente embarcar em uma carta de apoiadores que encontra lá no deck dele ou dela. Se o fizer, seu oponente desenha um cartão.",
          },
        },
        {
          cost: ["Metal", "Colorless"],
          name: {
            en: "Metal Hook",
            ja: "メタルフック",
            fr: "Crochet métallique",
            de: "Metallhaken",
            es: "Gancho de metal",
            it: "Gancio di metallo",
            pt: "Gancho de metal",
          },
          effect: {
            en: "Before doing damage, you may switch 1 of your opponent's Benched Pokemon with 1 of the Defending Pokemon. If you do, this attack does 20 damage to the new Defending Pokemon.",
            ja: "ダメージを与える前に、1つの防御ポケモンで相手のベンチポケモンを1つ切り替えることができます。もしそうなら、この攻撃は新しい防御ポケモンに20のダメージを与えます。",
            fr: "Avant de faire des dégâts, vous pouvez changer 1 des Pokémon bancés de votre adversaire avec 1 des Pokémon en défense. Si vous le faites, cette attaque fait 20 dégâts au nouveau Pokémon défendant.",
            de: "Bevor Sie Schaden anrichten, können Sie 1 des Pokémon Ihres Gegners mit einem der verteidigenden Pokémon umschalten. Wenn Sie dies tun, verursacht dieser Angriff 20 Schaden für das neue verteidigende Pokemon.",
            es: "Antes de hacer daño, puede cambiar 1 de los Pokémon de banca de su oponente con 1 del Pokémon defensor. Si lo haces, este ataque hace 20 daños al nuevo Pokémon defensor.",
            it: "Prima di fare danni, puoi cambiare 1 del Pokemon in panchina del tuo avversario con 1 del Pokemon in carica. Se lo fai, questo attacco infligge 20 danni al nuovo Pokemon in difesa.",
            pt: "Antes de causar danos, você pode trocar 1 do Pokémon bancado do seu oponente com 1 dos Pokémon defensores. Se o fizer, esse ataque causa 20 danos ao novo Pokémon defensivo.",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
