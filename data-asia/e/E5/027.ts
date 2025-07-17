import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         en: "Gyarados - 027/088",
         ja: "Gyarados -027/088",
         fr: "Gyarados - 027/088",
         de: "Gyarados - 027/088",
         es: "Gyarados - 027/088",
         it: "Gyarados - 027/088",
         pt: "Gyarados - 027/088",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [130],
      hp: 90,
      types: ["Water"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Flame Vapor",
            ja: "炎の蒸気",
            fr: "Vapeur de flamme",
            de: "Flammdampf",
            es: "Vapor de llamas",
            it: "Vapore di fiamma",
            pt: "Vapor de chama",
          },
          effect: {
            en: "When you play Gyarados from your hand to evolve your Active Pokmon, you may flip 2 coins. For each heads, discard an Energy card attached to the Defending Pokmon.",
            ja: "アクティブなポケモンを進化させるために手からgyaradosをプレイすると、2つのコインをひっくり返すことができます。各ヘッドについて、防御ポケモンに取り付けられたエネルギーカードを捨てます。",
            fr: "Lorsque vous jouez aux gyarados de votre main pour faire évoluer votre Pokémon actif, vous pouvez retourner 2 pièces. Pour chaque tête, jetez une carte d'énergie attachée au Pokémon en défense.",
            de: "Wenn Sie Gyarados von Ihrer Hand spielen, um Ihr aktives Pokémon zu entwickeln, können Sie 2 Münzen umdrehen. Entsorgen Sie für jeden Köpfe eine an das verteidigende Pokémon angeschlossene Energiekarte.",
            es: "Cuando juegas a Gyarados de tu mano para evolucionar tu Pokémon activo, puedes voltear 2 monedas. Para cada cabezal, deseche una tarjeta de energía unida al Pokémon defensor.",
            it: "Quando giochi Gyarados dalla tua mano per evolvere il tuo Pokemon attivo, puoi capovolgere 2 monete. Per ogni testa, scartare una carta di energia collegata al Pokemon in difesa.",
            pt: "Quando você toca gyarados da sua mão para evoluir seu Pokémon ativo, você pode virar 2 moedas. Para cada cabeça, descarte um cartão de energia preso ao Pokémon atual.",
          },
      }],

      attacks: [
        {
          cost: ["Water", "Colorless", "Colorless", "Colorless"],
          name: {
            en: "Dragon's Vengeance",
            ja: "ドラゴンの復ge",
            fr: "Vengeance du dragon",
            de: "Dragon's Rache",
            es: "Venganza del dragón",
            it: "Dragon's Vengeance",
            pt: "Vingança do dragão",
          },
          effect: {
            en: "If Gyarados has 7 or more damage counters on it, this attack's base damage is 100.",
            ja: "Gyaradosに7つ以上のダメージカウンターがある場合、この攻撃のベースダメージは100です。",
            fr: "Si Gyarados a 7 compteurs de dégâts ou plus, les dégâts de base de cette attaque sont de 100.",
            de: "Wenn Gyarados 7 oder mehr Schadenszähler hat, beträgt der Grundschaden dieses Angriffs 100.",
            es: "Si Gyarados tiene 7 o más contadores de daño, el daño base de este ataque es de 100.",
            it: "Se Gyarados ha 7 o più contatori di danni su di esso, il danno di base di questo attacco è di 100.",
            pt: "Se Gyarados tiver 7 ou mais contadores de danos, o dano básico desse ataque é de 100.",
          },
          damage: 50,
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
