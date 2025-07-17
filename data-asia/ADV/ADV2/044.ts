import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
         en: "Sableye",
         ja: "sableye",
         fr: "Sableye",
         de: "Sableye",
         es: "Sableye",
         it: "Sableye",
         pt: "Sableye",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [302],
      hp: 60,
      types: ["Darkness"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Supernatural",
            ja: "超自然",
            fr: "Surnaturel",
            de: "Übernatürlich",
            es: "Sobrenatural",
            it: "Soprannaturale",
            pt: "Sobrenatural",
          },
          effect: {
            en: "Look at your opponent's hand. You may use the effect of a Supporter card you find there as the effect of this attack. (The Supporter card remains in your opponent's hand.)",
            ja: "相手の手を見てください。この攻撃の効果として、そこにあるサポーターカードの効果を使用できます。 （サポーターカードは相手の手に残ります。）",
            fr: "Regardez la main de votre adversaire. Vous pouvez utiliser l'effet d'une carte supporte que vous y trouverez comme l'effet de cette attaque. (La carte supporters reste dans la main de votre adversaire.)",
            de: "Schauen Sie sich die Hand Ihres Gegners an. Sie können den Effekt einer Unterstützerkarte verwenden, die Sie dort als den Effekt dieses Angriffs finden. (Die Unterstützerkarte bleibt in der Hand Ihres Gegners.)",
            es: "Mira la mano de tu oponente. Puede usar el efecto de una carta de partidario que encuentre allí como el efecto de este ataque. (La carta de seguidores permanece en la mano de tu oponente).",
            it: "Guarda la mano del tuo avversario. Puoi usare l'effetto di una carta di sostenitore che trovi lì come effetto di questo attacco. (La scheda di sostenitore rimane nella mano del tuo avversario.)",
            pt: "Olhe para a mão do seu oponente. Você pode usar o efeito de um cartão de apoiador que encontra lá como o efeito desse ataque. (O cartão de apoiadores permanece na mão do seu oponente.)",
          },
        },
        {
          cost: ["Darkness", "Colorless"],
          name: {
            en: "Dark Bind",
            ja: "暗いバインド",
            fr: "Liaison sombre",
            de: "Dunkle binden",
            es: "Atención oscura",
            it: "Legame scuro",
            pt: "Bind escuro",
          },
          effect: {
            en: "You may discard a Darkness Energy card attached to Sableye. If you do, the Defending Pokemon is now Paralyzed.",
            ja: "Sableyeに取り付けられたDarkness Energyカードを捨てることができます。もしそうなら、防御するポケモンは今や麻痺しています。",
            fr: "Vous pouvez jeter une carte d'énergie de l'obscurité attachée à Sableye. Si vous le faites, le Pokémon en défense est maintenant paralysé.",
            de: "Sie können eine an Sableye befestigte Dunkelheitsenergiekarte verwerfen. Wenn Sie dies tun, ist das verteidigende Pokemon jetzt gelähmt.",
            es: "Puede descartar una tarjeta de energía de oscuridad unida a Sableye. Si lo haces, el Pokémon defensor ahora está paralizado.",
            it: "Puoi scartare una carta di energia oscura attaccata a Sableye. Se lo fai, il Pokemon in carica è ora paralizzato.",
            pt: "Você pode descartar um cartão de energia da escuridão anexado a Sableye. Se o fizer, o pokemon defensor agora está paralisado.",
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
