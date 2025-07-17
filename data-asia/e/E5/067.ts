import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         en: "Ursaring",
         ja: "ウルサリング",
         fr: "Ursaring",
         de: "Ursaring",
         es: "Ursaring",
         it: "Ursaring",
         pt: "Ursar",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [217],
      hp: 80,
      types: ["Colorless"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Bear Hug",
            ja: "抱きしめる",
            fr: "Étreinte",
            de: "Bärum umarmt",
            es: "Hacer abrazo",
            it: "Orso abbraccio",
            pt: "Urso abraço",
          },
          effect: {
            en: "The Defending Pokemon can't retreat during your opponent's next turn.",
            ja: "防御するポケモンは、相手の次のターン中に退却することはできません。",
            fr: "Le Pokémon en défense ne peut pas se retirer pendant le prochain tour de votre adversaire.",
            de: "Das verteidigende Pokemon kann sich während der nächsten Runde Ihres Gegners nicht zurückziehen.",
            es: "El Pokémon defensor no puede retirarse durante el próximo turno de tu oponente.",
            it: "Il Pokemon in carica non può ritirarsi durante il prossimo turno del tuo avversario.",
            pt: "O Pokémon atual não pode recuar durante o próximo turno do seu oponente.",
          },
          damage: 30,
        },
        {
          cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
          name: {
            en: "Rend",
            ja: "レンド",
            fr: "Déchirer",
            de: "Zerreißen",
            es: "Desgarrar",
            it: "Rend",
            pt: "Rend",
          },
          effect: {
            en: "If the Defending Pokemon already has any damage counters on it, this attack does 40 damage plus 20 more damage. If not, this attack does 40 damage.",
            ja: "防御するポケモンがすでにダメージカウンターを持っている場合、この攻撃は40ダメージに加えて20のダメージを与えます。そうでない場合、この攻撃は40ダメージを与えます。",
            fr: "Si le Pokémon en défense a déjà des compteurs de dégâts, cette attaque fait 40 dégâts plus 20 dégâts supplémentaires. Sinon, cette attaque fait 40 dégâts.",
            de: "Wenn das verteidigende Pokémon bereits Schadenszähler hat, verursacht dieser Angriff 40 Schaden zuzüglich 20 weitere Schäden. Wenn nicht, verursacht dieser Angriff 40 Schaden.",
            es: "Si el Pokémon defensor ya tiene algún contador de daño, este ataque hace 40 daños más 20 daños más. Si no, este ataque hace 40 daños.",
            it: "Se il Pokemon in carica ha già contatori di danno, questo attacco infligge 40 danni più 20 danni. In caso contrario, questo attacco infligge 40 danni.",
            pt: "Se o Pokémon atual já tiver algum contador de danos, esse ataque causará 40 danos mais 20 danos. Caso contrário, esse ataque causa 40 danos.",
          },
        },
      ],

      retreat: 2,

};
