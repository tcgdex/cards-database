import {Card} from "../../../interfaces"
import Set from "../E2"

const card: Card = {
      set: Set,
      name: {
         en: "Nidoking - 049/092",
         ja: "ニドギング-049/092",
         fr: "Nidoking - 049/092",
         de: "Nidoking - 049/092",
         es: "Nidoking - 049/092",
         it: "Nidoking - 049/092",
         pt: "Nidoking - 049/092",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [34],
      hp: 110,
      types: ["Fighting"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Earth Rage",
            ja: "地球の怒り",
            fr: "Rage de la terre",
            de: "Erdwut",
            es: "Rage de la tierra",
            it: "Rabbia della terra",
            pt: "Raiva da terra",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, if Nidoking is your Active Pokmon, you may flip a coin. If heads, put a damage counter on each of your opponent's Benched Pokmon. This power can't be used if Nidoking is affected by a Special Condition.",
            ja: "ターン中に（攻撃の前に）</em> </em>、nidkingがアクティブなポクモンである場合、コインをひっくり返すことができます。頭の場合は、相手のベンチポクモンのそれぞれにダメージカウンターを置きます。ニドキングが特別な状態の影響を受ける場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, si Nidoking est votre pokmon actif, vous pouvez retourner une pièce. Si les têtes, mettez un compteur de dégâts sur chacun des pokmon bancés de votre adversaire. Cette puissance ne peut pas être utilisée si Nidoking est affecté par une condition spéciale.",
            de: "Einmal in Ihrem Zug <em> (vor Ihrem Angriff) </em>, wenn Nidoking Ihr aktives Pokmon ist, können Sie eine Münze umdrehen. Wenn Sie Köpfe haben, legen Sie einen Schadenschalter auf das Bank -Pokmon Ihres Gegners. Diese Leistung kann nicht angewendet werden, wenn Nidoking durch einen besonderen Zustand beeinflusst wird.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, si Nidoking es su Pokmon activo, puede voltear una moneda. Si se dirige, coloque un mostrador de daño en cada uno de los pokmon de banca de su oponente. Esta potencia no se puede usar si Nidoking se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, se nidoking è il tuo Pokmon attivo, puoi capovolgere una moneta. Se la testa, metti un contatore di danni su ciascuno dei Pokmon in panchina del tuo avversario. Questa potenza non può essere utilizzata se Nidoking è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, se Nidoking for o seu Pokmon ativo, você poderá virar uma moeda. Se as cabeças, coloque um balcão de dano em cada um dos Pokmon de bancada do seu oponente. Esse poder não pode ser usado se a Nidoking for afetada por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Fighting", "Fighting", "Colorless", "Colorless"],
          name: {
            en: "Giant Horn",
            ja: "巨大なホーン",
            fr: "Corne géante",
            de: "Riesenhorn",
            es: "Bocina gigante",
            it: "Corno gigante",
            pt: "Buzina gigante",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 50 damage plus 30 more damage.",
            ja: "コインをひっくり返します。ヘッドの場合、この攻撃は50ダメージに加えて30ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 50 dégâts plus 30 dégâts supplémentaires.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 50 Schäden plus 30 weitere Schäden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 50 daños más 30 más de daño.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 50 danni più 30 altri danni.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 50 danos mais 30 mais danos.",
          },
        },
      ],

      retreat: 3,

};
