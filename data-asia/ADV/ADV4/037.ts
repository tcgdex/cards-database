import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Luvdisc",
         ja: "luvdisc",
         fr: "Luvdisc",
         de: "Luvdisc",
         es: "Luvdisc",
         it: "Luvdisc",
         pt: "Luvdisc",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [370],
      hp: 60,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Loving Draw",
            ja: "愛するドロー",
            fr: "Tirage d'amour",
            de: "Liebevolle Zeichnung",
            es: "Dibujo amoroso",
            it: "Dttura amorevole",
            pt: "Desenho amoroso",
          },
          effect: {
            en: "Draw cards until you have the same number of cards in your hand as your opponent has in his or her hand.",
            ja: "相手が手に持っているのと同じ数のカードが手に入るまでカードを描画します。",
            fr: "Dessinez des cartes jusqu'à ce que vous ayez le même nombre de cartes dans votre main que votre adversaire dans sa main.",
            de: "Zeichnen Sie Karten, bis Sie die gleiche Anzahl von Karten in der Hand haben wie Ihr Gegner in seiner Hand.",
            es: "Dibuja cartas hasta que tengas el mismo número de cartas en tu mano que tu oponente tiene en su mano.",
            it: "Disegna le carte finché non hai lo stesso numero di carte in mano che il tuo avversario ha in mano.",
            pt: "Desenhe cartas até ter o mesmo número de cartas na mão que seu oponente tem na mão dele ou dela.",
          },
        },
        {
          cost: ["Water"],
          name: {
            en: "Sweet Temptation",
            ja: "甘い誘惑",
            fr: "Douce tentation",
            de: "Süße Versuchung",
            es: "Dulce tentación",
            it: "Dolce tentazione",
            pt: "Doce tentação",
          },
          effect: {
            en: "Switch 1 of your opponent's Benched Pokemon with 1 of the Defending Pokemon. Your opponent chooses the Defending Pokemon to switch. This attack does 10 damage to the new Defending Pokemon.",
            ja: "対戦相手のベンチポケモンの1つを防御ポケモンの1つに切り替えます。対戦相手は、防御するポケモンを選択して切り替えます。この攻撃は、新しい防御ポケモンに10のダメージを与えます。",
            fr: "Communiquez 1 des Pokémon bancés de votre adversaire avec 1 des Pokémon en défense. Votre adversaire choisit le Pokémon en défense pour changer. Cette attaque fait 10 dégâts au nouveau Pokémon défendant.",
            de: "Wechseln Sie 1 des Pokémon Ihres Gegners mit einem der verteidigenden Pokémon. Ihr Gegner wählt das verteidigende Pokemon zum Wechseln. Dieser Angriff schädigt das neue verteidigende Pokémon 10.",
            es: "Cambie 1 del Pokémon de banca de tu oponente con 1 del Pokémon defensor. Tu oponente elige el Pokémon defensor para cambiar. Este ataque hace 10 daños al nuevo Pokémon defensor.",
            it: "Switch 1 del Pokemon in panchina del tuo avversario con 1 del Pokemon in difesa. Il tuo avversario sceglie il Pokemon in carica da cambiare. Questo attacco infligge 10 danni al nuovo Pokemon in carica.",
            pt: "Switch 1 do Pokémon bancado do seu oponente com 1 do Pokémon atual. Seu oponente escolhe o pokemon defensor para mudar. Este ataque causa 10 danos ao novo Pokémon defensivo.",
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
