import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Forretress - 074/088",
         ja: "ForRetress -074/088",
         fr: "Forredress - 074/088",
         de: "ForRetress - 074/088",
         es: "Forretress - 074/088",
         it: "FORRETRSE - 074/088",
         pt: "Forrerete - 074/088",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [205],
      hp: 70,
      types: ["Metal"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Spinning Blow",
            ja: "スピニングブロー",
            fr: "Coup de rotation",
            de: "Spinnwall",
            es: "Golpe giratorio",
            it: "Colpo rotante",
            pt: "Golpe giratório",
          },
          effect: {
            en: "Flip 2 coins. This attack does 20 damage times the number of heads. If both coins are heads, switch Forretress with 1 of your Benched Pokemon.",
            ja: "2つのコインをフリップします。この攻撃は、ヘッド数の20倍のダメージを与えます。両方のコインがヘッドである場合は、ベンチ付きポケモンの1つを使用してforretressを切り替えます。",
            fr: "Flip 2 pièces. Cette attaque fait 20 dégâts de temps le nombre de têtes. Si les deux pièces sont des têtes, changez de rétraction avec 1 de votre pokemon banc.",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 20 Schadenszeiten der Anzahl der Köpfe. Wenn beide Münzen Köpfe sind, wechseln Sie die Forressress mit 1 Ihres Bankpokémons.",
            es: "Flip 2 monedas. Este ataque hace 20 veces el número de cabezas. Si ambas monedas son cabezas, cambie ForRetress con 1 de su Pokémon de banca.",
            it: "Flip 2 monete. Questo attacco fa 20 danni il numero di teste. Se entrambe le monete sono teste, cambia Forress con 1 del tuo Pokemon in panchina.",
            pt: "Flip 2 moedas. Este ataque causa 20 danos vezes o número de cabeças. Se ambas as moedas forem cabeças, mude a forretress com 1 do seu Pokémon em bancada.",
          },
        },
        {
          cost: ["Metal", "Colorless", "Colorless"],
          name: {
            en: "Scatterbomb",
            ja: "散布骨",
            fr: "Bombe à dispersion",
            de: "Streubombe",
            es: "Bomba de dispersión",
            it: "Spetterbomb",
            pt: "Scatterbomb",
          },
          effect: {
            en: "Flip 2 coins. For each heads, do 10 damage to each of your opponent's Benched Pokemon. For each tails, do 10 damage to each of your own Benched Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "2つのコインをフリップします。各ヘッドについて、相手のベンチポケモンのそれぞれに10ダメージを与えます。各尾で、自分のベンチポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Flip 2 pièces. For each heads, do 10 damage to each of your opponent's Benched Pokemon. For each tails, do 10 damage to each of your own Benched Pokemon. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "2 Münzen umdrehen. Führen Sie für jeden Köpfe 10 Schäden an den Bankpokémon Ihres Gegners. Führen Sie für jedes Schwanz 10 Schäden an jedem Ihrer eigenen Pokémon. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Flip 2 monedas. Para cada cabezal, haga 10 daños a cada Pokémon de banca de tu oponente. Para cada cola, haga 10 daños a cada uno de sus propios Pokémon en banca. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Flip 2 monete. Per ogni testa, fai 10 danni a ciascuno dei Pokemon in panchina del tuo avversario. Per ogni coda, fai 10 danni a ciascuno dei tuoi Pokemon in panchina. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Flip 2 moedas. Para cada cabeça, faça 10 danos a cada um dos Pokémon bancos do seu oponente. Para cada cauda, faça 10 danos a cada um de seus próprios Pokémon em banco. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 40,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
