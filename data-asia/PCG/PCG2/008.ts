import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Beautifly",
         ja: "美しい",
         fr: "Bien",
         de: "Schön",
         es: "Belleza",
         it: "Beauty",
         pt: "Beautifly",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [267],
      hp: 100,
      types: ["Grass"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Hunch",
            ja: "おしゃべり",
            fr: "Pressentiment",
            de: "Ahnung",
            es: "Corazonada",
            it: "Intuizione",
            pt: "Hunch",
          },
          effect: {
            en: "As long as Beautifly's remaining HP is 40 or less, Beautifly does 40 more damage to the Defending PokÃ©mon (before applying Weakness and Resistance).",
            ja: "Beautiflyの残りのHPが40以下である限り、BeautiflyはPokã©Monに40個のダメージを与えます（脱力感と抵抗を適用する前）。",
            fr: "Tant que les HP restants de Beautifal sont de 40 ans ou moins, il y a de manière magnifique 40 dommages supplémentaires aux Poké en défense (avant d'appliquer une faiblesse et une résistance).",
            de: "Solange die verbleibende HP von Beautifly 40 oder weniger beträgt, verursacht schön 40 weitere Schäden an der verteidigenden Poké Mon (bevor Sie Schwäche und Widerstand anwenden).",
            es: "Mientras el HP restante de Beautifly sea 40 o menos, Beautifly hace 40 daños más al Poké Mon defensor (antes de aplicar debilidad y resistencia).",
            it: "Finché gli HP rimanenti di Beautifly sono 40 o meno, Beautifly fa più di 40 danni al Poké Mon difensore (prima di applicare la debolezza e la resistenza).",
            pt: "Enquanto o HP restante de Beautifly for 40 ou menos, Beautifly causar mais 40 danos ao Poké Mon atual (antes de aplicar fraqueza e resistência).",
          },
      }],

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Luring Antenna",
            ja: "誘惑アンテナ",
            fr: "Antenne attirant",
            de: "Antenne locken",
            es: "Antena de atraer",
            it: "Antenna che attira",
            pt: "Antena atraente",
          },
          effect: {
            en: "Before doing damage, you may choose 1 of your opponent's Benched Pokemon and switch it with 1 of the Defending Pokemon. If you do, this attack does 20 damage to the new Defending Pokemon. Your opponent chooses the Defending Pokemon to switch.",
            ja: "ダメージを与える前に、対戦相手のベンチポケモンの1つを選択し、防御ポケモンの1つで切り替えることができます。もしそうなら、この攻撃は新しい防御ポケモンに20のダメージを与えます。対戦相手は、防御するポケモンを選択して切り替えます。",
            fr: "Avant de faire des dégâts, vous pouvez choisir 1 des pokemon bancés de votre adversaire et le changer avec 1 des Pokémon en défense. Si vous le faites, cette attaque fait 20 dégâts au nouveau Pokémon défendant. Votre adversaire choisit le Pokémon en défense pour changer.",
            de: "Bevor Sie Schaden anrichten, können Sie 1 der Bankpokémon Ihres Gegners auswählen und es mit 1 des verteidigenden Pokémon schalten. Wenn Sie dies tun, verursacht dieser Angriff 20 Schaden für das neue verteidigende Pokemon. Ihr Gegner wählt das verteidigende Pokemon zum Wechseln.",
            es: "Antes de hacer daño, puede elegir 1 de los Pokémon de banca de su oponente y cambiarlo con 1 del Pokémon defensor. Si lo haces, este ataque hace 20 daños al nuevo Pokémon defensor. Tu oponente elige el Pokémon defensor para cambiar.",
            it: "Prima di fare danni, puoi scegliere 1 del Pokemon in panchina del tuo avversario e cambiarlo con 1 dei Pokemon in difesa. Se lo fai, questo attacco infligge 20 danni al nuovo Pokemon in difesa. Il tuo avversario sceglie il Pokemon in carica da cambiare.",
            pt: "Antes de causar danos, você pode escolher 1 dos Pokémon com bancada do seu oponente e trocá -lo com 1 dos Pokémon defensores. Se o fizer, esse ataque causa 20 danos ao novo Pokémon defensivo. Seu oponente escolhe o pokemon defensor para mudar.",
          },
          damage: 20,
        },
        {
          cost: ["Grass", "Colorless", "Colorless"],
          name: {
            en: "Cutting Wind",
            ja: "風を切る",
            fr: "Vent de coupe",
            de: "Wind schneiden",
            es: "Viento cortante",
            it: "Taglio del vento",
            pt: "Vento de corte",
          },
          damage: 50,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
