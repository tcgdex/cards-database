import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Blissey ex",
         ja: "Blissey Ex",
         fr: "Blissey ex",
         de: "Blissey ex",
         es: "Blissey Ex",
         it: "Blissey Ex",
         pt: "Blissey Ex",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [242],
      hp: 160,
      types: ["Colorless"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Blissful Support",
            ja: "至福のサポート",
            fr: "Soutien heureux",
            de: "Glückselige Unterstützung",
            es: "Apoyo maravilloso",
            it: "Supporto beato",
            pt: "Apoio feliz",
          },
          effect: {
            en: "Once during your turn, when you play Blissey ex from your hand to evolve 1 of your PokÃ©mon, you may discard all Energy cards attached to any number of your PokÃ©mon and remove all damage counters from those PokÃ©mon.",
            ja: "ターン中に、手からブリッシーの元をプレイしてポカンの1つを進化させると、ポケモンの任意の数に取り付けられたすべてのエネルギーカードを破棄し、それらのポケモンからすべてのダメージカウンターを削除することができます。",
            fr: "Une fois pendant votre tour, lorsque vous jouez Blissey Ex de votre main pour évoluer 1 de votre poké, vous pouvez jeter toutes les cartes d'énergie attachées à n'importe quel nombre de vos poké et supprimer tous les compteurs de dégâts de ces poké.",
            de: "Sobald Sie während Ihres Zuges Blissey Ex von Ihrer Hand spielen, um 1 Ihrer Poké Mon Mo zu entwickeln, können Sie alle an einer beliebigen Anzahl Ihres Poké Mon angeschlossenen Energiekarten verwerfen und alle Schadenszähler von diesen Pokémon entfernen.",
            es: "Una vez durante su turno, cuando juegas Blissey Ex de tu mano para evolucionar 1 de tu Poké Mon, puedes descartar todas las tarjetas de energía unidas a cualquier número de tu Poké Mon y eliminar todos los contadores de daño de esos Poké Mon.",
            it: "Una volta durante il tuo turno, quando giochi a Blissey ex dalla tua mano per evolvere 1 del tuo poké mon, puoi scartare tutte le carte di energia collegate a qualsiasi numero del tuo poké e rimuovere tutti i contatori di danno da quelli poké mon.",
            pt: "Uma vez durante o seu turno, quando você toca Blissey Ex da sua mão para evoluir 1 do seu Poké Mon, você pode descartar todos os cartões de energia anexados a qualquer número do seu Poké e remover todos os contadores de danos daqueles Poké -Mon.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Energy Absorption",
            ja: "エネルギー吸収",
            fr: "Absorption d'énergie",
            de: "Energieabsorption",
            es: "Absorción de energía",
            it: "Assorbimento di energia",
            pt: "Absorção de energia",
          },
          effect: {
            en: "Attach up to 3 Energy cards from your discard pile to Blissey ex.",
            ja: "廃棄パイルから最大3枚のエネルギーカードをブリッシーエクシートに取り付けます。",
            fr: "Fixez jusqu'à 3 cartes d'énergie de votre tas de défausse à Blissey Ex.",
            de: "Fügen Sie bis zu 3 Energiekarten von Ihrem Ablagerungsstapel an Blissey Ex an.",
            es: "Adjunte hasta 3 cartas de energía desde su pila de descarte a Blissey Ex.",
            it: "Attacca fino a 3 carte energetiche dalla tua pila di scarto a Blissey Ex.",
            pt: "Anexe até 3 cartões de energia da sua pilha de descarte ao Blissey Ex.",
          },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
          name: {
            en: "Rollout",
            ja: "ロールアウトする",
            fr: "Dérouler",
            de: "Ausrollen",
            es: "Despliegue",
            it: "Lancio",
            pt: "Sair da cama",
          },
          damage: 60,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
        {
          type: "holo",
          subtype: "unlimited",
        },
      ],
};
