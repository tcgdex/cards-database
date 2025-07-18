import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Victreebel",
         ja: "Victreebel",
         fr: "Victreebel",
         de: "Victreebel",
         es: "Victreebel",
         it: "Victreebel",
         pt: "Victreebel",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [71],
      hp: 110,
      types: ["Grass"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Acid Sampler",
            ja: "酸サンプラー",
            fr: "Échantillonneur acide",
            de: "Säurestastung",
            es: "Muestra de ácido",
            it: "Campionatore acido",
            pt: "Amostrador ácido",
          },
          effect: {
            en: "As long as Victreebel is your Active PokÃ©mon, put 1 damage counter on each Defending PokÃ©mon between turns. Acid Sampler stops working if your other Active PokÃ©mon is not a Victreebel.",
            ja: "Victreebelがあなたのアクティブなポカモンである限り、ターンの間に防御する各ポカモンに1つのダメージカウンターを置きます。他のアクティブなPokã©MonがVictreebelではない場合、酸サンプラーは機能しなくなります。",
            fr: "Tant que Victreebel est votre poké actif, mettez 1 compteur de dégâts sur chaque Poké en défense entre les virages. L'échantillonneur acide cesse de fonctionner si votre autre poké actif n'est pas un victreebel.",
            de: "Solange Victreebel Ihr aktiver Poké Mon Mon ist, setzen Sie 1 Schadenschalter auf jeden verteidigenden Poké Mon zwischen den Kurven. Der Säure -Probenehmer funktioniert nicht mehr, wenn Ihr anderer aktiver Poké Mon kein Victreebel ist.",
            es: "Mientras Victreebel sea su Poké Mon activo, coloque 1 contador de daño en cada Poké Mon de defensa entre turnos. El muestreador de ácido deja de funcionar si su otro Poké activo no es un victreebel.",
            it: "Finché Victreebel è il tuo poké attivo, metti 1 contatore di danni su ciascun poké di difesa tra i turni. Acid Sampler smette di funzionare se l'altro tuo poké attivo non è un Victreebel.",
            pt: "Enquanto Victreebel for o seu Poké ativo, coloque 1 contador de danos em cada Poké de defesa entre turnos. O amostrador de ácido para de funcionar se o seu outro Poké Mon não for um Victreebel.",
          },
      }],

      attacks: [
        {
          cost: ["Grass", "Colorless", "Colorless"],
          name: {
            en: "Acid",
            ja: "酸",
            fr: "Acide",
            de: "Säure",
            es: "Ácido",
            it: "Acido",
            pt: "Ácido",
          },
          effect: {
            en: "The Defending Pokemon can't retreat until the end of your opponent's next turn.",
            ja: "ディフェンディングポケモンは、相手の次のターンの終わりまで退却することはできません。",
            fr: "Le Pokémon en défense ne peut pas se retirer jusqu'à la fin du prochain tour de votre adversaire.",
            de: "Das verteidigende Pokémon kann sich erst am Ende der nächsten Runde Ihres Gegners zurückziehen.",
            es: "El Pokémon defensor no puede retirarse hasta el final del próximo turno de tu oponente.",
            it: "Il Pokemon in carica non può ritirarsi fino alla fine del turno successivo del tuo avversario.",
            pt: "O Pokémon atual não pode recuar até o final do próximo turno do seu oponente.",
          },
          damage: 50,
        },
      ],

      retreat: 2,

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
