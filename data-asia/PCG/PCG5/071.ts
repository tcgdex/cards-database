import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Shiftry",
         ja: "シフトリー",
         fr: "Décalage",
         de: "Shiftry",
         es: "Cambio",
         it: "SHIFTRY",
         pt: "Shiftry",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [275],
      hp: 110,
      types: ["Darkness"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Evolutionary Fan",
            ja: "進化的ファン",
            fr: "Ventilateur évolutif",
            de: "Evolutionsfan",
            es: "Ventilador evolutivo",
            it: "Fan evolutivo",
            pt: "Fã evolutivo",
          },
          effect: {
            en: "Once during your turn, when you play Shiftry from your hand to evolve 1 of your PokÃ©mon, you may choose 1 of your Evolved PokÃ©mon in play (excluding any Shiftry).  Return that PokÃ©mon and all cards attached to it to your hand.",
            ja: "ターン中に、Pokã©Monの1つを進化させるために手からシフトリーをプレイすると、進化したPokã©Monの1つを選択できます（シフトリーを除く）。  そのpokã©monとすべてのカードを手に返します。",
            fr: "Une fois pendant votre tour, lorsque vous jouez au Shiftry de votre main pour évoluer 1 de votre poké, vous pouvez choisir 1 de votre poké évolué en jeu (à l'exclusion de tout décalage).  Renvoyez ce pokã © Mon et toutes les cartes qui y sont attachées à votre main.",
            de: "Sobald Sie während Ihres Zuges Shiftry von Ihrer Hand spielen, um 1 Ihrer Poké Mon Mon zu entwickeln, können Sie 1 Ihrer entwickelten Poké Mon im Spiel auswählen (mit Ausnahme einer Shiftry).  Geben Sie diesen Poké Mon und alle Karten an Ihre Hand zurück.",
            es: "Una vez durante su turno, cuando juegas a Shiftry de tu mano para evolucionar 1 de tu Poké Mon, puedes elegir 1 de tu Poké Mon evolucionado en juego (excluyendo cualquier cambiaeta).  Devuelve ese Poké Mon y todas las tarjetas adjuntas a tu mano.",
            it: "Una volta durante il tuo turno, quando giochi a shiftry dalla tua mano per evolvere 1 del tuo poké mon, puoi scegliere 1 del tuo poké evoluto in gioco (escluso qualsiasi shiftry).  Restituisce quel poké mon e tutte le carte attaccate alla tua mano.",
            pt: "Uma vez durante o seu turno, quando você joga shiftry da sua mão para evoluir 1 do seu Poké Mon, você pode escolher 1 de seu Poké -Mon evoluído (excluindo qualquer shiftry).  Retorne o Poké Mon e todos os cartões anexados à sua mão.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Reactive Beating",
            ja: "反応的な鼓動",
            fr: "Coups réactifs",
            de: "Reaktive Schläge",
            es: "Latido reactivo",
            it: "Battito reattivo",
            pt: "Batimento reativo",
          },
          effect: {
            en: "If Shiftry has any React Energy cards attached to it, the Defending Pokemon is now Confused.",
            ja: "Shiftryがそれに反応エネルギーカードを添付している場合、防御ポケモンは混乱しています。",
            fr: "Si Shiftry a des cartes d'énergie React qui y sont attachées, le Pokémon en défense est désormais confus.",
            de: "Wenn Shiftry React Energy -Karten daran befestigt ist, ist das verteidigende Pokémon jetzt verwirrt.",
            es: "Si Shiftry tiene alguna tarjetas de energía reaccionadas adjuntas, el Pokémon defensor ahora está confundido.",
            it: "Se Shiftry ha delle carte di energia react ad esso collegate, il Pokemon in difesa è ora confuso.",
            pt: "Se o Shiftry tiver algum cartão de energia do React anexado a ele, o Pokemon atual agora está confuso.",
          },
          damage: 30,
        },
        {
          cost: ["Darkness", "Colorless", "Colorless"],
          name: {
            en: "Cross-Cut",
            ja: "クロスカット",
            fr: "Croix",
            de: "Cross-Cut",
            es: "Cortado transversal",
            it: "Croce",
            pt: "Corte transversal",
          },
          effect: {
            en: "If the Defending Pokemon is an Evolved Pokemon, this attack does 40 damage plus 30 more damage.",
            ja: "防御ポケモンが進化したポケモンである場合、この攻撃は40ダメージに加えて30ダメージを与えます。",
            fr: "Si le Pokémon en défense est un Pokémon évolué, cette attaque fait 40 dégâts plus 30 dégâts supplémentaires.",
            de: "Wenn das verteidigende Pokémon ein entwickeltes Pokémon ist, verursacht dieser Angriff 40 Schaden zuzüglich 30 weitere Schäden.",
            es: "Si el Pokémon defensor es un Pokémon evolucionado, este ataque hace 40 daños más 30 más de daño.",
            it: "Se il Pokemon in carica è un Pokemon evoluto, questo attacco infligge 40 danni più 30 danni.",
            pt: "Se o Pokémon atual for um Pokémon evoluído, esse ataque causará 40 danos mais 30 danos.",
          },
        },
      ],

      retreat: 1,

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
