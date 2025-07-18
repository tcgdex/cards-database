import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Crobat ex",
         ja: "Crobat Ex",
         fr: "Crobat ex",
         de: "Crobat Ex",
         es: "Crobat Ex",
         it: "Crobat ex",
         pt: "CROBAT EX",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [169],
      hp: 130,
      types: ["Grass"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Distortion",
            ja: "ねじれ",
            fr: "Distorsion",
            de: "Verzerrung",
            es: "Distorsión",
            it: "Distorsione",
            pt: "Distorção",
          },
          effect: {
            en: "Once during your turn (before your attack), if Crobat ex is your Active PokÃ©mon, you may put 1 damage counter on 1 of your opponent's PokÃ©mon. This power can't be used if Crobat ex is affected by a Special Condition.",
            ja: "ターン中（攻撃の前に）、Crobat ExがアクティブなPokã©Monである場合、対戦相手のPokã©Monに1つのダメージカウンターを置くことができます。 Crobat Exが特別な状態の影響を受ける場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), si Crobat Ex est votre poké actif, vous pouvez mettre 1 compteur de dégâts sur 1 des poké de votre adversaire. Cette puissance ne peut pas être utilisée si Crobat Ex est affecté par une condition spéciale.",
            de: "Sobald Sie während Ihres Zuges (vor Ihrem Angriff), wenn Crobat EX Ihr aktiver Pokémon ist, können Sie 1 Schadensschalter auf 1 der Poké Mons Ihres Gegners einsetzen. Diese Leistung kann nicht verwendet werden, wenn Crobat EX von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno (antes de su ataque), si Crobat ex es su Poké Mon activo, puede poner 1 contador de daño en 1 de los Poké de su oponente. Esta potencia no se puede usar si Crobat Ex se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno (prima dell'attacco), se Crobat ex è il tuo poké attivo, puoi mettere 1 contatore di danni su 1 del poké del tuo avversario. Questa potenza non può essere utilizzata se Crobat Ex è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), se o CROBAT EX for o seu Poké de Mon ativo, você poderá colocar 1 contador de danos em 1 do Poké Mon do seu oponente. Esse poder não pode ser usado se o crobat ex for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
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
        {
          cost: ["Grass", "Grass", "Colorless"],
          name: {
            en: "Pester",
            ja: "ペスター",
            fr: "Harceler",
            de: "Belästigen",
            es: "Molestar",
            it: "Tormentare",
            pt: "Pester",
          },
          effect: {
            en: "If the Defending Pokemon is affected by a Special Condition, this attack does 60 damage plus 40 more damage.",
            ja: "防御ポケモンが特別な状態の影響を受ける場合、この攻撃は60ダメージに加えて40ダメージを与えます。",
            fr: "Si le Pokémon en défense est affecté par une condition spéciale, cette attaque fait 60 dégâts plus 40 dégâts supplémentaires.",
            de: "Wenn das verteidigende Pokémon von einem besonderen Zustand betroffen ist, verursacht dieser Angriff 60 Schaden zuzüglich 40 weitere Schäden.",
            es: "Si el Pokémon defensor se ve afectado por una condición especial, este ataque hace 60 daños más 40 daños más.",
            it: "Se il Pokemon in carica è influenzato da una condizione speciale, questo attacco infligge 60 danni più 40 danni.",
            pt: "Se o pokemon atual for afetado por uma condição especial, esse ataque causará 60 danos mais 40 mais danos.",
          },
        },
      ],


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
