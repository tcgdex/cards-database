import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Espeon ex",
         ja: "Espeon Ex",
         fr: "Espeon Ex",
         de: "Espeon ex",
         es: "ESPEON EX",
         it: "Espeon Ex",
         pt: "Espeon Ex",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [196],
      hp: 110,
      types: ["Psychic"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Devo Flash",
            ja: "デボフラッシュ",
            fr: "Devo Flash",
            de: "Devo Blitz",
            es: "Devo Flash",
            it: "Devo flash",
            pt: "Devo Flash",
          },
          effect: {
            en: "Once during your turn, when you play Espeon ex from your hand to evolve 1 of your PokÃ©mon, you may choose 1 Evolved PokÃ©mon on your opponent's Bench, remove the highest Stage Evolution card from that PokÃ©mon, and put it back into his or her hand.",
            ja: "ターン中に、Pokã©Monの1つを進化させるためにEspeon Exをプレイすると、相手のベンチで1つの進化したPokã©Monを選択し、そのPokã©Monから最高のステージ進化カードを削除し、それを手に戻します。",
            fr: "Une fois pendant votre tour, lorsque vous jouez à Espeon Ex de votre main pour évoluer 1 de votre poké, vous pouvez choisir 1 Pokã © évolué sur le banc de votre adversaire, retirer la carte d'évolution de la scène la plus élevée de ce pokã © Mon et la remettre dans sa main.",
            de: "Sobald Sie während Ihres Zuges Espeon Ex von Ihrer Hand spielen, um 1 Ihrer Poké Mon Mo zu entwickeln, können Sie 1 Evolved Poké Mon auf der Bank Ihres Gegners wählen, entfernen Sie die höchste Bühnen -Evolutionskarte von diesem Poké Mon Mon und stecken Sie sie wieder in seine Hand.",
            es: "Una vez durante su turno, cuando juegas a Espeon Ex de tu mano para evolucionar 1 de tu Poké Mon, puedes elegir 1 Poké evolucionado en el banco de tu oponente, elimine la tarjeta de evolución del escenario más alta de ese Pokã © Mon, y volver a ponerlo en su mano.",
            it: "Una volta durante il tuo turno, quando suoni ESPEON EX dalla tua mano per evolvere 1 del tuo poké mon, puoi scegliere 1 poké evoluto sul panchina del tuo avversario, rimuovi la carta di evoluzione del palcoscenico più alta da quel pokã © mon e rimetterlo nella sua mano.",
            pt: "Uma vez durante o seu turno, quando você joga Espeon Ex da sua mão para evoluir 1 do seu Poké Mon, você pode escolher 1 Poké -Mon evoluído no banco do seu oponente, remova a placa de evolução mais alta daquele Poké Mon e coloque -o de volta em sua mão.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Snap Tail",
            ja: "スナップテール",
            fr: "Snap-tail",
            de: "Schwanz schnappen",
            es: "Cola",
            it: "Coda a scatto",
            pt: "CAIXA SNAP",
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
          cost: ["Psychic", "Colorless", "Colorless"],
          name: {
            en: "Psyloop",
            ja: "ピループ",
            fr: "Psyloop",
            de: "Psyloop",
            es: "Psyloop",
            it: "Psyloop",
            pt: "Psyloop",
          },
          effect: {
            en: "Does 60 damage plus 30 more damage for each Trainer card your opponent has in play.",
            ja: "対戦相手がプレイしているトレーナーカードごとに60のダメージと30のダメージを与えます。",
            fr: "Fait 60 dégâts plus 30 dégâts supplémentaires pour chaque carte d'entraîneur que votre adversaire a en jeu.",
            de: "Fügt 60 Schäden plus 30 weitere Schäden für jede Trainerkarte, die Ihr Gegner im Spiel hat.",
            es: "Hace 60 daños más 30 más de daño para cada carta de entrenador que tu oponente tiene en juego.",
            it: "Fa 60 danni più 30 danni in più per ogni carta dell'allenatore che il tuo avversario ha in gioco.",
            pt: "60 danos mais mais 30 danos para cada carta de treinador que seu oponente tem em jogo.",
          },
        },
      ],


      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
