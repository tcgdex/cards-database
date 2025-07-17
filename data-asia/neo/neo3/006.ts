import {Card} from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
      set: Set,
      name: {
         en: "Crobat",
         ja: "クロバット",
         fr: "Crobat",
         de: "Crobat",
         es: "Cobat",
         it: "Crobat",
         pt: "CROBAT",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [169],
      hp: 90,
      types: ["Grass"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Triggered Poison",
            ja: "トリガーされた毒",
            fr: "Poison déclenché",
            de: "Gift ausgelöst",
            es: "Veneno desencadenado",
            it: "Veleno innescato",
            pt: "Veneno desencadeado",
          },
          effect: {
            en: "If your opponent attaches an Energy card to the Defending Pokemon during his or her next turn, that Pokemon becomes Poisoned.",
            ja: "対戦相手が次のターン中にディフェンディングポケモンにエネルギーカードを取り付けた場合、そのポケモンは毒されます。",
            fr: "Si votre adversaire attache une carte d'énergie au Pokémon en défense pendant son prochain tour, ce Pokémon devient empoisonné.",
            de: "Wenn Ihr Gegner während seiner nächsten Kurve eine Energiekarte an das verteidigende Pokémon anschließt, wird dieses Pokemon vergiftet.",
            es: "Si tu oponente adjunta una tarjeta de energía al Pokémon defensor durante su próximo turno, ese Pokémon se envenena.",
            it: "Se il tuo avversario collega una carta energetica al Pokemon in carica durante il suo prossimo turno, quel Pokemon viene avvelenato.",
            pt: "Se o seu oponente conectar um cartão de energia ao Pokémon atual durante o próximo turno, esse Pokémon fica envenenado.",
          },
          damage: 20,
        },
        {
          cost: ["Grass", "Grass", "Colorless"],
          name: {
            en: "Cross Attack",
            ja: "クロス攻撃",
            fr: "Attaquer",
            de: "Kreuzangriff",
            es: "Ataque cruzado",
            it: "Attacco incrociato",
            pt: "Ataque cruzado",
          },
          effect: {
            en: "Flip 4 coins. This attack does 20 damage times the number of heads. If you get 2 or more heads, the Defending Pokemon is now Confused.",
            ja: "4コインをひっくり返します。この攻撃は、ヘッド数の20倍のダメージを与えます。 2つ以上の頭を手に入れると、防御するポケモンは混乱しています。",
            fr: "Flip 4 pièces. Cette attaque fait 20 dégâts de temps le nombre de têtes. Si vous obtenez 2 têtes ou plus, le Pokémon en défense est maintenant confus.",
            de: "Flip 4 Münzen. Dieser Angriff verursacht 20 Schadenszeiten der Anzahl der Köpfe. Wenn Sie 2 oder mehr Köpfe erhalten, ist das verteidigende Pokémon jetzt verwirrt.",
            es: "Flip 4 monedas. Este ataque hace 20 veces el número de cabezas. Si obtienes 2 o más cabezas, el Pokémon defensor ahora está confundido.",
            it: "Flip 4 monete. Questo attacco fa 20 danni il numero di teste. Se ottieni 2 o più teste, il Pokemon in difesa è ora confuso.",
            pt: "Flip 4 moedas. Este ataque causa 20 danos vezes o número de cabeças. Se você receber 2 ou mais cabeças, o Pokemon atual agora está confuso.",
          },
        },
      ],


      variants: [
        {
          type: "holo",
        },
      ],
};
