import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Poliwrath - 051/088",
         ja: "Poliwrath -051/088",
         fr: "Poliwrath - 051/088",
         de: "Poliwrath - 051/088",
         es: "Poliwrath - 051/088",
         it: "Poliwrath - 051/088",
         pt: "Poliwrath - 051/088",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [62],
      hp: 110,
      types: ["Fighting"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Strange Spiral",
            ja: "奇妙ならせん",
            fr: "Étrange spirale",
            de: "Seltsame Spirale",
            es: "Espiral extraña",
            it: "Strana spirale",
            pt: "Espiral estranha",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, if Poliwrath is your Active Pokmon, you may discard a basic Energy card attached to Poliwrath. If you do, the Defending Pokmon is now Confused. This power can't be used if Poliwrath is affected by a Special Condition.",
            ja: "ターン中に（攻撃の前）</em> </em>、PoliWrathがアクティブなPokmonである場合、PoliWrathに取り付けられた基本的なエネルギーカードを廃棄することができます。もしそうなら、防御するポクモンは今混乱しています。 Poliwrathが特別な状態の影響を受けている場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, si Poliwrath est votre pokmon actif, vous pouvez éliminer une carte d'énergie de base attachée à Poliwrath. Si vous le faites, le Pokmon en défense est maintenant confus. Cette puissance ne peut pas être utilisée si le poliwrath est affecté par une condition spéciale.",
            de: "Sobald Sie in Ihrem Zug <em> (vor Ihrem Angriff) </em> sind, können Sie, wenn Poliwrath Ihr aktives Pokmon ist, eine an Poliwrath verbundene grundlegende Energiekarte verwerfen. Wenn Sie dies tun, ist das verteidigende Pokmon jetzt verwirrt. Diese Leistung kann nicht angewendet werden, wenn Poliwrath von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, si Poliwrath es su Pokmon activo, puede descartar una tarjeta de energía básica unida a Poliwrath. Si lo haces, el Pokmon defensor ahora está confundido. Esta potencia no se puede usar si Poliwrath se ve afectada por una condición especial.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, se Poliwrath è il tuo Pokmon attivo, puoi scartare una carta di energia di base collegata a Poliwrath. Se lo fai, il Pokmon in carica è ora confuso. Questa potenza non può essere utilizzata se Poliwrath è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, se o Poliwrath for o seu Pokmon ativo, você poderá descartar um cartão de energia básico anexado ao Poliwrath. Se o fizer, o Pokmon defensor agora está confuso. Esse poder não pode ser usado se o poliwrath for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Fighting", "Fighting", "Colorless"],
          name: {
            en: "Spiral Punch",
            ja: "スパイラルパンチ",
            fr: "Punch en spirale",
            de: "Spiralschlag",
            es: "Espiral",
            it: "Punch a spirale",
            pt: "Soco em espiral",
          },
          effect: {
            en: "Flip a coin until you get tails. This attack does 40 damage plus 20 more damage for each heads.",
            ja: "尾がなくなるまでコインをひっくり返します。この攻撃は、40のダメージに加えて、ヘッドごとに20のダメージを与えます。",
            fr: "Retournez une pièce jusqu'à ce que vous obteniez la queue. Cette attaque fait 40 dégâts plus 20 dégâts supplémentaires pour chaque tête.",
            de: "Drehen Sie eine Münze um, bis Sie Schwänze bekommen. Dieser Angriff verursacht 40 Schäden plus 20 weitere Schäden für jeden Köpfe.",
            es: "Voltea una moneda hasta que obtengas colas. Este ataque hace 40 daños más 20 más de daño para cada cabezal.",
            it: "Capovolgi una moneta fino a quando non ricevi la coda. Questo attacco infligge 40 danni più 20 danni in più per ogni teste.",
            pt: "Vire uma moeda até obter caudas. Este ataque causa 40 danos mais 20 mais danos para cada cabeça.",
          },
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
