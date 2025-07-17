import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         en: "Magneton - 072/088",
         ja: "マグネトン-072/088",
         fr: "Magneton - 072/088",
         de: "Magneton - 072/088",
         es: "Magneton - 072/088",
         it: "Magneton - 072/088",
         pt: "Magneton - 072/088",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [82],
      hp: 70,
      types: ["Metal"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Bounce Off",
            ja: "跳ね返ります",
            fr: "Rebondir",
            de: "Abprallen",
            es: "Rebotar",
            it: "Rimbalzare",
            pt: "Ricochetear",
          },
          effect: {
            en: "If Magneton and the Defending Pokemon don't have the same number of Energy cards attached to them, the player controlling the Active Pokemon with the fewest number of Energy cards attached to it switches 1 of his or her Benched Pokemon with his or her Active Pokemon.",
            ja: "Magnetonと防御ポケモンにエネルギーカードの数が同じ数字が付いていない場合、プレーヤーは、アクティブな数のエネルギーカードを取り付けてアクティブなポケモンを制御し、ベンチポケモンをアクティブポケモンに切り替えます。",
            fr: "Si Magneton et le Pokémon en défense n'ont pas le même nombre de cartes d'énergie qui leur sont attachées, le joueur contrôlant le Pokémon actif avec le moins de cartes d'énergie qui lui est attachée change 1 de son Pokémon bancté avec son Pokémon actif.",
            de: "Wenn Magneton und das verteidigende Pokémon nicht die gleiche Anzahl von Energiekarten haben, steuert der Spieler das aktive Pokémon mit der geringsten Anzahl von Energiekarten, die mit seinem aktiven Pokémon 1 seiner oder ihres Bankpokémon schalten.",
            es: "Si Magneton y el Pokémon defensor no tienen la misma cantidad de tarjetas de energía unidas a ellas, el jugador que controla el Pokémon activo con la menor cantidad de tarjetas de energía unidas a él cambia 1 de su Pokémon en banca con su Pokémon activo.",
            it: "Se Magneton e il Pokemon in carica non hanno lo stesso numero di carte di energia ad esse collegate, il giocatore che controlla il Pokemon attivo con il minor numero di carte di energia collegate a esso commuta 1 del suo Pokemon in panchina con il suo Pokemon attivo.",
            pt: "Se Magneton e o Pokémon atual não tiverem o mesmo número de cartas de energia anexadas a eles, o jogador que controla o Pokémon ativo com o menor número de cartas de energia anexadas a ele interruptam 1 de seu Pokémon com seu Pokémon ativo.",
          },
          damage: 20,
        },
        {
          cost: ["Metal", "Metal", "Colorless"],
          name: {
            en: "Magnetic Wave",
            ja: "磁波",
            fr: "Vague magnétique",
            de: "Magnetwelle",
            es: "Onda magnética",
            it: "Onda magnetica",
            pt: "Onda magnética",
          },
          effect: {
            en: "This attack does 30 damage plus 10 damage times the number of your Benched Pokemon minus the number of your opponent's Benched Pokemon. (For example, if your opponent has 1 Benched Pokemon and you have 3, this attack will do 30 damage plus 20 more damage.)",
            ja: "この攻撃は、30のダメージを加えて、ベンチ付きポケモンの数を10回ダメージして、相手のベンチポケモンの数を差し引いています。 （たとえば、対戦相手が1つのベンチポケモンを持っていて、3つのベンチがある場合、この攻撃は30のダメージと20ダメージを与えます。）",
            fr: "Cette attaque fait 30 dégâts plus 10 dégâts du nombre de votre pokemon bancaire moins le nombre de Pokémon bancés de votre adversaire. (Par exemple, si votre adversaire a 1 Pokémon banc et vous en avez 3, cette attaque fera 30 dégâts plus 20 dégâts supplémentaires.)",
            de: "Dieser Angriff verursacht 30 Schäden plus 10 Schadenszeiten der Anzahl Ihres Bankpokémons abzüglich der Anzahl der Bankpokémon Ihres Gegners. (Wenn Ihr Gegner beispielsweise 1 Pokemon mit einem Bank hat und Sie 3 haben, wird dieser Angriff 30 Schaden zuzüglich 20 weitere Schäden verursachen.)",
            es: "Este ataque hace 30 daños más 10 veces el número de tu pokemon de banca menos el número de Pokémon de banca de tu oponente. (Por ejemplo, si tu oponente tiene 1 Pokémon en banca y tienes 3, este ataque hará 30 daños más 20 más de daño).",
            it: "Questo attacco infligge 30 danni più 10 danni volte al numero di Pokemon in panchina meno il numero del Pokemon in panchina del tuo avversario. (Ad esempio, se il tuo avversario ha 1 Pokemon in panchina e ne hai 3, questo attacco farà 30 danni più 20 danni in più.)",
            pt: "Este ataque causa 30 danos mais 10 danos vezes o número de seu Pokémon em bancada menos o número de Pokémon em bancada do seu oponente. (Por exemplo, se o seu oponente tiver 1 Pokemon em bancada e você tiver 3, esse ataque causará 30 danos mais 20 mais danos.)",
          },
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
