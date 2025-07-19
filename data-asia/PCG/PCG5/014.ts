import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Cradily",
         ja: "ゆっくりと",
         fr: "Bêtide",
         de: "Cradily",
         es: "Con cuna",
         it: "Cradiosamente",
         pt: "Infelizmente",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [346],
      hp: 100,
      types: ["Grass"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Devolution Wave",
            ja: "委任波",
            fr: "Vague de dévolution",
            de: "Devolutionswelle",
            es: "Ola de devolución",
            it: "DEVOLUTION Wave",
            pt: "Onda de devolução",
          },
          effect: {
            en: "Count the number of React Energy cards attached to Cradily and choose up to that number of your opponent's Evolved Pokemon. Remove the highest Stage Evolution card from each of those Pokemon, then have your opponent shuffle those cards into his or her deck.",
            ja: "cradilyに取り付けられたReact Energyカードの数を数え、相手の進化したポケモンの数を選択します。これらのポケモンのそれぞれから最高のステージ進化カードを削除し、相手にそれらのカードを彼または彼女のデッキにシャッフルさせます。",
            fr: "Comptez le nombre de cartes d'énergie React attachées à bricolage et choisissez ce nombre de pokemon évolué par votre adversaire. Retirez la carte d'évolution de la scène la plus élevée de chacun de ces Pokémon, puis demandez à votre adversaire de mélanger ces cartes dans son deck.",
            de: "Zählen Sie die Anzahl der React -Energiekarten, die an Cradeily angeschlossen sind, und wählen Sie bis zu dieser Anzahl der entwickelten Pokémon Ihres Gegners. Entfernen Sie die Evolutionskarte mit der höchsten Bühne von jedem dieser Pokémon und lassen Sie Ihren Gegner diese Karten in sein Deck scheln.",
            es: "Cuente el número de tarjetas de energía React unidas a la cuna y elija hasta ese número de Pokémon evolucionado de su oponente. Retire la tarjeta de evolución del escenario más alta de cada uno de esos Pokémon, luego haga que su oponente mueva esas cartas en su mazo.",
            it: "Conta il numero di carte di energia React collegate a Cradily e scegli fino a quel numero di Pokemon evoluto del tuo avversario. Rimuovi la carta Evolution più alta da ciascuno di quei Pokemon, quindi il tuo avversario mescola quelle carte nel suo mazzo.",
            pt: "Conte o número de cartões de energia do React ligados ao bobo e escolha esse número de Pokémon evoluído do seu oponente. Remova a carta de evolução mais alta de cada um desses Pokémon e faça com que seu oponente embaralhe essas cartas em seu deck.",
          },
        },
        {
          cost: ["Grass", "Colorless"],
          name: {
            en: "Linear Attack",
            ja: "線形攻撃",
            fr: "Attaque linéaire",
            de: "Linearer Angriff",
            es: "Ataque lineal",
            it: "Attacco lineare",
            pt: "Ataque linear",
          },
          effect: {
            en: "Choose 1 of your opponent's Pokemon. This attack does 30 damage to that Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに30のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Choisissez 1 du pokemon de votre adversaire. Cette attaque fait 30 dégâts à ce Pokémon. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wählen Sie 1 des Pokémon Ihres Gegners. Dieser Angriff schädigt dieses Pokémon 30. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Elija 1 de Pokémon de tu oponente. Este ataque hace 30 daños a ese Pokémon. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Scegli 1 Pokemon del tuo avversario. Questo attacco infligge 30 danni a quel Pokemon. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Escolha 1 do Pokémon do seu oponente. Este ataque causa 30 danos a esse Pokémon. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Mud Shot",
            ja: "泥ショット",
            fr: "Coup de boue",
            de: "Schlammschuss",
            es: "Disparo de barro",
            it: "Scatto di fango",
            pt: "Tiro de lama",
          },
          damage: 50,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
