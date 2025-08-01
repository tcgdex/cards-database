import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Light Jolteon",
         ja: "ライトジョルテオン",
         fr: "Jolteon léger",
         de: "Leichtes Jolteon",
         es: "Jolteon ligero",
         it: "Light Jolteon",
         pt: "Jolteon leve",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [135],
      hp: 70,
      types: ["Lightning"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Lightning"],
          name: {
            en: "Pulse Guard",
            ja: "パルスガード",
            fr: "Gardien de pouls",
            de: "Pulswache",
            es: "Protector de pulso",
            it: "Pulse Guard",
            pt: "Guarda de pulso",
          },
          effect: {
            en: "During your opponent's next turn, whenever 30 or more damage is done to Light Jolteon (after applying Weakness and Resistance), prevent that damage. (Any other effects of attacks still happen.)",
            ja: "対戦相手の次のターン中に、照明ジョルテオンに30回以上のダメージが与えられたとき（脱力感と抵抗を適用した後）、そのダメージを防ぎます。 （攻撃の他の影響はまだ発生しています。）",
            fr: "Pendant le prochain virage de votre adversaire, chaque fois que 30 dégâts ou plus sont causés pour allumer Jolteon (après avoir appliqué une faiblesse et une résistance), empêchez ces dommages. (Tout autre effet des attaques se produit.)",
            de: "Während der nächsten Kurve Ihres Gegners, wenn 30 oder mehr Schäden an Light Jolteon angerichtet werden (nach Auftragen von Schwäche und Widerstand), verhindern Sie diesen Schaden. (Alle anderen Auswirkungen von Angriffen treten immer noch auf.)",
            es: "Durante el próximo turno de tu oponente, cada vez que se causan 30 o más daños a Jolteon ligero (después de aplicar debilidad y resistencia), evite ese daño. (Todavía ocurren cualquier otro efecto de los ataques).",
            it: "Durante il prossimo turno del tuo avversario, ogni volta che vengono fatti 30 o più danni per accendere Jolteon (dopo aver applicato la debolezza e la resistenza), prevenire tali danni. (Qualsiasi altro effetto degli attacchi si verifica ancora.)",
            pt: "Durante o próximo turno do seu oponente, sempre que 30 ou mais danos forem causados à luz Jolteon (depois de aplicar fraqueza e resistência), evite esse dano. (Quaisquer outros efeitos dos ataques ainda acontecem.)",
          },
        },
        {
          cost: ["Lightning", "Lightning", "Colorless"],
          name: {
            en: "Thunder Needle",
            ja: "雷の針",
            fr: "Aiguille de tonnerre",
            de: "Donnernadel",
            es: "Aguja del trueno",
            it: "Tuono ago",
            pt: "Agulha do trovão",
          },
          effect: {
            en: "Flip 3 coins. This attack does 20 damage times the number of heads. If you get 2 or more heads, the Defending Pokemon is now Paralyzed.",
            ja: "3コインをフリップします。この攻撃は、ヘッド数の20倍のダメージを与えます。 2つ以上の頭を手に入れると、防御するポケモンが麻痺しています。",
            fr: "Flip 3 pièces. Cette attaque fait 20 dégâts de temps le nombre de têtes. Si vous obtenez 2 têtes ou plus, le Pokémon en défense est maintenant paralysé.",
            de: "3 Münzen umdrehen. Dieser Angriff verursacht 20 Schadenszeiten der Anzahl der Köpfe. Wenn Sie 2 oder mehr Köpfe erhalten, ist das verteidigende Pokémon jetzt gelähmt.",
            es: "Flip 3 monedas. Este ataque hace 20 veces el número de cabezas. Si obtienes 2 o más cabezas, el Pokémon defensor ahora está paralizado.",
            it: "Flip 3 monete. Questo attacco fa 20 danni il numero di teste. Se ottieni 2 o più teste, il Pokemon in carica è ora paralizzato.",
            pt: "Flip 3 moedas. Este ataque causa 20 danos vezes o número de cabeças. Se você receber 2 ou mais cabeças, o Pokémon atual está agora paralisado.",
          },
        },
      ],


      variants: [
        {
          type: "normal",
        },
      ],
};
