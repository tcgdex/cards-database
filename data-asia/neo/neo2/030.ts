import {Card} from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
      set: Set,
      name: {
         en: "Unown A",
         ja: "a",
         fr: "Non-bas",
         de: "Unown a",
         es: "Undow A",
         it: "Unown a",
         pt: "Unnow a",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [201],
      hp: 40,
      types: ["Psychic"],
      stage: "Basic",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "ANGER [Anger]",
            ja: "怒り[怒り]",
            fr: "Colère [colère]",
            de: "Wut [Wut]",
            es: "Ira [ira]",
            it: "Rabbia [rabbia]",
            pt: "Raiva [raiva]",
          },
          effect: {
            en: "Whenever 1 of your Pokmon with Unown in its name uses its Hidden Power attack, that attack does 10 more damage for each damage counter on Unown [A]. If you have more than 1 Unown [A] in play, use only 1 [Anger] for each attack.",
            ja: "名前が掲載されていないPokmonが隠された電源攻撃を使用するたびに、その攻撃は、Unown [a]の各ダメージカウンターに対してさらに10ダメージを与えます。プレイ中に複数の未使用[a]がある場合は、攻撃ごとに1 [怒り]のみを使用します。",
            fr: "Chaque fois que 1 de votre pokmon avec Unwen en son nom utilise son attaque de puissance cachée, cette attaque fait 10 dégâts supplémentaires pour chaque compteur de dégâts sur non-bas [A]. Si vous avez plus de 1 non-bas [A] en jeu, utilisez seulement 1 [colère] pour chaque attaque.",
            de: "Immer wenn 1 Ihrer Pokmon mit Unown in seinem Namen seinen versteckten Stromangriff verwendet, verursacht dieser Angriff 10 weitere Schäden für jeden Schadensschalter auf Unown [a]. Wenn Sie mehr als 1 unown [a] im Spiel haben, verwenden Sie für jeden Angriff nur 1 [Wut].",
            es: "Cada vez que 1 de su Pokmon con Unlow en su nombre usa su ataque de poder oculto, ese ataque hace 10 daños más por cada contador de daño en Unlow [A]. Si tienes más de 1 sin duda [a] en juego, usa solo 1 [ira] para cada ataque.",
            it: "Ogni volta che 1 dei tuoi Pokmon con Unown nel suo nome usa il suo attacco di potere nascosto, quell'attacco fa altri 10 danni per ciascun contatore di danni su Unown [A]. Se hai più di 1 discesa [a] in gioco, usa solo 1 [rabbia] per ogni attacco.",
            pt: "Sempre que 1 do seu Pokmon com Unwnown em seu nome usa seu ataque de poder oculto, esse ataque causa mais 10 danos a cada contador de danos na unidade [a]. Se você tiver mais de 1 unição [a] em jogo, use apenas 1 [raiva] para cada ataque.",
          },
      }],

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Hidden Power",
            ja: "隠された力",
            fr: "Pouvoir caché",
            de: "Versteckte Kraft",
            es: "Poder oculto",
            it: "Potere nascosto",
            pt: "Poder oculto",
          },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
      ],
};
