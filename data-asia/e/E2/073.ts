import {Card} from "../../../interfaces"
import Set from "../E2"

const card: Card = {
      set: Set,
      name: {
         en: "Magneton - 073/092",
         ja: "マグネトン-073/092",
         fr: "Magneton - 073/092",
         de: "Magneton - 073/092",
         es: "Magneton - 073/092",
         it: "Magneton - 073/092",
         pt: "Magneton - 073/092",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [82],
      hp: 70,
      types: ["Metal"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Magnetic Flow",
            ja: "磁気流",
            fr: "Débit magnétique",
            de: "Magnetischer Fluss",
            es: "Flujo magnético",
            it: "Flusso magnetico",
            pt: "Fluxo magnético",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, if Magneton is your Active Pokmon, you may flip a coin. If heads, choose 2 of your opponent's Pokmon that have Energy cards attached to them. Choose 1 of the Energy cards attached to each of those Pokmon and switch them between the Pokmon. This power can't be used if Magneton is affected by a Special Condition.",
            ja: "ターン中に（攻撃の前）</em> </em>、マグネトンがアクティブなポクモンの場合、コインをひっくり返すことができます。頭の場合は、エネルギーカードが付いている2つの対戦相手のPokmonを選択します。それらの各ポクモンに添付されたエネルギーカードの1つを選択し、ポクモン間に切り替えます。マグネトンが特別な状態の影響を受ける場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, si Magneton est votre pokmon actif, vous pouvez retourner une pièce. Si les têtes, choisissez 2 du pokmon de votre adversaire qui ont des cartes d'énergie qui leur sont attachées. Choisissez 1 des cartes d'énergie attachées à chacun de ces pokmon et basculez-les entre le pokmon. Cette puissance ne peut pas être utilisée si Magneton est affecté par une condition spéciale.",
            de: "Einmal in Ihrem Zug <em> (vor Ihrem Angriff) </em>, wenn Magneton Ihr aktives Pokmon ist, können Sie eine Münze umdrehen. Wenn Sie Köpfe haben, wählen Sie 2 des Pokmons Ihres Gegners mit Energiekarten. Wählen Sie 1 der Energiekarten, die an jedem dieser Pokmon angebracht sind, und wechseln Sie sie zwischen dem Pokmon. Diese Leistung kann nicht verwendet werden, wenn Magneton von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, si Magneton es su Pokmon activo, puede voltear una moneda. Si se dirige, elija 2 del Pokmon de su oponente que tenga cartas de energía unidas a ellas. Elija 1 de las tarjetas de energía unidas a cada uno de esos Pokmon y cambielas entre el Pokmon. Esta potencia no se puede usar si Magneton se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, se Magneton è il tuo Pokmon attivo, puoi capovolgere una moneta. Se le teste, scegli 2 dei Pokmon del tuo avversario che hanno carte di energia ad esse collegate. Scegli 1 delle carte di energia collegate a ciascuno di quei Pokmon e cambiarle tra i Pokmon. Questa potenza non può essere utilizzata se Magneton è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, se Magneton for o seu Pokmon ativo, você poderá virar uma moeda. Se as cabeças, escolha 2 dos Pokmon do seu oponente que possuem cartões de energia anexados a eles. Escolha 1 dos cartões de energia anexados a cada um desses Pokmon e alterne -os entre o Pokmon. Esse poder não pode ser usado se Magneton for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Steel Wave",
            ja: "鋼波",
            fr: "Vague d'acier",
            de: "Stahlwelle",
            es: "Onda de acero",
            it: "Onda d'acciaio",
            pt: "Onda de aço",
          },
          effect: {
            en: "This attack does 10 damage to each of your opponent's Benched Pokemon that are the same type (color) as the Defending Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "この攻撃は、防御ポケモンと同じタイプ（色）である相手のベンチポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Cette attaque inflige 10 dégâts à chacun des pokemon bancés de votre adversaire qui sont du même type (couleur) que le Pokémon en défense. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Dieser Angriff schädigt das Bankpokémon Ihres Gegners, die den gleichen Typ (Farbe) wie das verteidigende Pokémon sind, 10 Schäden. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Este ataque hace 10 daños a cada Pokémon de banca de tu oponente que son del mismo tipo (color) que el Pokémon defensor. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Questo attacco infligge 10 danni a ciascuno dei Pokemon in panchina del tuo avversario che sono lo stesso tipo (colore) del Pokemon in difesa. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Este ataque causa 10 danos a cada um dos Pokémon bancos do seu oponente que são do mesmo tipo (cor) que o Pokémon defensor. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 30,
        },
      ],

      retreat: 2,

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
