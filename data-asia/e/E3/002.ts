import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
      set: Set,
      name: {
         en: "Gloom",
         ja: "暗闇",
         fr: "Obscurité",
         de: "Düsternis",
         es: "Oscuridad",
         it: "Oscurità",
         pt: "Melancolia",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [44],
      hp: 70,
      types: ["Grass"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Enervating Pollen",
            ja: "花粉を動かします",
            fr: "Pollen énervateur",
            de: "Pollen verstärken",
            es: "Enervante polen",
            it: "Snervante polline",
            pt: "Enervante pólen",
          },
          effect: {
            en: "As long as Gloom is in play, Resistance on each player's Active Pokmon only reduces damage by 10.",
            ja: "暗闇が遊んでいる限り、各プレイヤーのアクティブなPokmonの抵抗は損傷を10だけ減らすだけです。",
            fr: "Tant que la morosité est en jeu, la résistance sur le pokmon actif de chaque joueur ne réduit que les dégâts de 10.",
            de: "Solange die Dunkelheit im Spiel ist, reduziert der Widerstand auf dem aktiven Pokmon jedes Spielers den Schaden nur um 10.",
            es: "Mientras la penumbra esté en juego, la resistencia en el Pokmon activo de cada jugador solo reduce el daño en 10.",
            it: "Finché l'oscurità è in gioco, la resistenza sui Pokmon attivi di ogni giocatore riduce solo il danno di 10.",
            pt: "Enquanto a tristeza estiver em jogo, a resistência ao Pokmon ativo de cada jogador reduz apenas os danos em 10.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Sleep Sap",
            ja: "眠り眠り",
            fr: "Sève de sommeil",
            de: "Schlafsaft",
            es: "Savia de sueño",
            it: "Sonno linfa",
            pt: "Seiva do sono",
          },
          effect: {
            en: "Both the Defending Pokemon and Gloom are now Asleep (after doing damage).",
            ja: "防御するポケモンと暗闇の両方が眠っています（ダメージを与えた後）。",
            fr: "Le Pokémon et la tristesse en défense sont maintenant endormis (après avoir fait des dégâts).",
            de: "Sowohl das verteidigende Pokemon als auch die Dunkelheit schlafen jetzt (nachdem sie Schaden angerichtet haben).",
            es: "Tanto el Pokémon y la tristeza defensores están dormidos (después de hacer daño).",
            it: "Sia il Pokemon e l'oscurità in difesa ora dormono (dopo aver fatto danni).",
            pt: "Tanto o Pokémon e a tristeza defensores estão agora dormindo (depois de causar danos).",
          },
          damage: 20,
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
