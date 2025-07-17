import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Light Vaporeon",
         ja: "軽いvaporeon",
         fr: "Vapore léger",
         de: "Leichtes Vaporeon",
         es: "Vaporeón ligero",
         it: "Leggero vaporeon",
         pt: "Vaporeon leve",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [134],
      hp: 80,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Wash Away",
            ja: "洗い流します",
            fr: "Se laver",
            de: "Wegspülen",
            es: "Quitar",
            it: "Lavare via",
            pt: "Lavar",
          },
          effect: {
            en: "If you have any Benched Pokemon, flip a coin. If heads, remove all damage counters from 1 of your Benched Pokemon and discard all Energy cards attached to it.",
            ja: "ベンチ付きポケモンがある場合は、コインをひっくり返します。ヘッドの場合は、ベンチ付きポケモンの1つからすべてのダメージカウンターを取り外し、それに取り付けられたすべてのエネルギーカードを破棄します。",
            fr: "Si vous avez des pokemon bancés, retournez une pièce. Si les têtes, retirez tous les compteurs de dégâts de 1 de votre pokemon bancé et jetez toutes les cartes d'énergie qui y sont attachées.",
            de: "Wenn Sie ein Bank -Pokemon haben, drehen Sie eine Münze. Wenn Sie Köpfe sind, entfernen Sie alle Schadenszähler von 1 Ihres Bankpokémons und entsorgen Sie alle daran befestigten Energiekarten.",
            es: "Si tienes algún Pokémon de banca, voltea una moneda. Si se dirige, elimine todos los contadores de daño de 1 de su pokemon de banca y descarte todas las tarjetas de energía unidas a ella.",
            it: "Se hai dei Pokemon in panchina, capovolgi una moneta. Se le teste, rimuovi tutti i contatori di danno da 1 dei Pokemon in panchina e scarta tutte le carte di energia attaccate.",
            pt: "Se você tiver algum Pokémon em banco, vire uma moeda. Se as cabeças, remova todos os contadores de danos de 1 do seu Pokémon em banco e descarte todos os cartões de energia anexados a ele.",
          },
        },
        {
          cost: ["Water", "Water", "Colorless"],
          name: {
            en: "Hypnoshower",
            ja: "催眠術",
            fr: "Hypnoshower",
            de: "Hypnoshower",
            es: "Hipnoshower",
            it: "Ipnoshower",
            pt: "Hypnoshower",
          },
          effect: {
            en: "The Defending Pokemon is now Asleep. Remove 1 damage counter from each Benched Pokemon (yours and your opponent's) with any damage counters on it.",
            ja: "防御ポケモンは今眠っています。ダメージカウンターを使用して、各ベンチポケモン（あなたと相手）から1つのダメージカウンターを取り外します。",
            fr: "Le Pokémon en défense est maintenant endormi. Retirez 1 compteur de dégâts de chaque pokemon bancé (le vôtre et celui de votre adversaire) avec tous les compteurs de dégâts dessus.",
            de: "Das verteidigende Pokemon schläft jetzt. Entfernen Sie 1 Schadenschalter von jedem Bank -Pokémon (Ihr und Ihr Gegner) mit allen Schadensblättern.",
            es: "El Pokémon defensor ahora está dormido. Retire 1 contador de daño de cada Pokémon en banca (el tuyo y el de tu oponente) con cualquier contador de daño.",
            it: "Il Pokemon in carica è ora addormentato. Rimuovi 1 contatore di danni da ciascun Pokemon in panchina (il tuo e quello del tuo avversario) con eventuali contatori di danno su di esso.",
            pt: "O Pokémon atual está agora dormindo. Remova 1 contador de danos de cada Pokémon em banco (o seu e o seu oponente) com quaisquer contadores de dano nele.",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
