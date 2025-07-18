import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Bellossom",
         ja: "Bellossom",
         fr: "Clocher",
         de: "Bellossom",
         es: "Brillo",
         it: "Belssom",
         pt: "Bellossom",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [182],
      hp: 90,
      types: ["Grass"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Green Dance",
            ja: "グリーンダンス",
            fr: "Danse verte",
            de: "Grüner Tanz",
            es: "Danza verde",
            it: "Danza verde",
            pt: "Dança verde",
          },
          effect: {
            en: "Search your deck for up to 2 Grass Pokemon, show them to your opponent, and put them into your hand. Shuffle your deck afterward. If you put any Grass Pokemon into your hand, you may switch Bellossom with 1 of your Benched Pokemon.",
            ja: "デッキを最大2匹の草ポケモンを検索し、相手に見せて、手に入れてください。その後、デッキをシャッフルします。草のポケモンを手に渡すと、ベンチのポケモンを1匹置いてBellossomを切り替えることができます。",
            fr: "Recherchez votre pont jusqu'à 2 Pokémon d'herbe, montrez-les à votre adversaire et mettez-les dans votre main. Mélanger votre deck par la suite. Si vous mettez un pokemon d'herbe dans votre main, vous pouvez changer de bellossome avec 1 de votre pokemon banc.",
            de: "Suchen Sie Ihr Deck nach bis zu 2 Graspokemon, zeigen Sie sie Ihrem Gegner und geben Sie sie in Ihre Hand. Mischen Sie anschließend Ihr Deck. Wenn Sie Graspokémon in Ihre Hand legen, können Sie Bellossom mit 1 Ihrer Bank -Pokemon wechseln.",
            es: "Busque en su mazo hasta 2 Pokémon de hierba, muéstrelos a su oponente y póngalos en su mano. Baraja tu mazo después. Si pones algún Pokémon de hierba en tu mano, puedes cambiar la barba con 1 de tu Pokémon de banca.",
            it: "Cerca nel tuo mazzo per un massimo di 2 Pokemon, mostrali al tuo avversario e mettili in mano. Shuffle il tuo mazzo in seguito. Se metti un pokemon in erba in mano, puoi cambiare bellossom con 1 del tuo Pokemon in panchina.",
            pt: "Procure seu baralho até 2 Pokémon de grama, mostre -os ao seu oponente e coloque -os em sua mão. Afaste seu baralho depois. Se você colocar algum Pokémon de grama em sua mão, poderá trocar de Bellossom com 1 do seu Pokémon em banco.",
          },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Full Bloom",
            ja: "満開",
            fr: "Plein de floraison",
            de: "Volle Blüte",
            es: "Floración",
            it: "Bloom piena",
            pt: "Bloom total",
          },
          effect: {
            en: "If you have at least 3 Bellossom in play, this attack does 50 damage plus 50 more damage.",
            ja: "少なくとも3つのBellossomがプレイされている場合、この攻撃は50のダメージと50のダメージを与えます。",
            fr: "Si vous avez au moins 3 Bellossom en jeu, cette attaque fait 50 dégâts plus 50 dégâts supplémentaires.",
            de: "Wenn Sie mindestens 3 Bellossom im Spiel haben, verursacht dieser Angriff 50 Schäden plus 50 weitere Schäden.",
            es: "Si tienes al menos 3 Bolessom en juego, este ataque hace 50 daños más 50 más de daño.",
            it: "Se hai almeno 3 bellossom in gioco, questo attacco infligge 50 danni più 50 danni.",
            pt: "Se você tiver pelo menos três Bellossom em jogo, esse ataque causará 50 danos mais 50 danos mais.",
          },
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
