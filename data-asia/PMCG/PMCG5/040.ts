import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Lt. Surge's Magneton",
         ja: "Surge's Magneton中t",
         fr: "Le lieutenant de surtension Magneton",
         de: "Lt. Surge's Magneton",
         es: "Magneton del teniente Surge",
         it: "Tenente Magneton di Surge",
         pt: "Magneton do tenente Surge",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [82],
      hp: 70,
      types: ["Lightning"],
      stage: "Stage1",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Energy Charge",
            ja: "エネルギー電荷",
            fr: "Charge d'énergie",
            de: "Energieladung",
            es: "Carga de energía",
            it: "Carica energetica",
            pt: "Carga energética",
          },
          effect: {
            en: "As often as you like during your turn <em>(before your attack)</em>, if Lt. Surge's Magneton is your Active Pokmon, you may take 1 Lightning Energy card attached to 1 of your Pokmon and attach it to Lt. Surge's Magneton. This power can't be used if Lt. Surge's Magneton is Asleep, Confused, or Paralyzed.",
            ja: "ターン中に好きなように（攻撃の前）</em> </em>、SurgeのMagneton中tがあなたのアクティブなPokmonである場合、Pokmonの1つに1つのLightning Energyカードを取り付けて、Surgeのマグネトン中Lに取り付けることができます。 Surgeのマグネトン中tが眠っている、混乱し、麻痺している場合、このパワーは使用できません。",
            fr: "Aussi souvent que vous le souhaitez pendant votre tour <em> (avant votre attaque) </em>, si le Lt.'s Magneton's Magneton est votre Pokmon actif, vous pouvez prendre 1 carte d'énergie Lightning attachée à 1 de votre Pokmon et la fixer au Lt. Surge's Magneton. Ce pouvoir ne peut pas être utilisé si le Lt. Surge's Magneton est endormi, confus ou paralysé.",
            de: "So oft Sie während Ihres Kurses <em> (vor Ihrem Angriff) </em> mögen, wenn der Magneton von Lt. Surge Ihr aktives Pokmon ist, können Sie 1 Blitzergiekarte an 1 Ihres Pokmons nehmen und an Lt. Surge's Magneton befestigen. Diese Kraft kann nicht verwendet werden, wenn der Magneton von Lt. Surge schläft, verwirrt oder gelähmt ist.",
            es: "Tan a menudo como desee durante su turno <em> (antes de su ataque) </em>, si el Magneton del Lt. Surge es su Pokmon activo, puede tomar 1 tarjeta de energía Lightning unida a 1 de su Pokmon y adjuntarlo al Magneton del teniente Surge. Este poder no se puede usar si el Magneton del teniente Surge está dormido, confundido o paralizado.",
            it: "Tutte le volte che desideri durante il tuo turno <em> (prima del tuo attacco) </em>, se il magneton di Lt. Surge è il tuo Pokmon attivo, puoi prendere 1 scheda di energia Lightning collegata a 1 del tuo Pokmon e attaccarlo al Magneton di Lt. Surge. Questa potenza non può essere utilizzata se il magneton di Ten. Surge è addormentato, confuso o paralizzato.",
            pt: "Sempre que quiser durante o seu turno <em> (antes do seu ataque) </em>, se o magneton do tenente Surge for o seu Pokmon ativo, você pode levar um cartão de energia de raios ligado a 1 do seu Pokmon e conectá -lo ao magneton do tenente Surge. Esse poder não pode ser usado se o Magneton do Lt. Surge estiver dormindo, confuso ou paralisado.",
          },
      }],

      attacks: [
        {
          cost: ["Lightning", "Lightning", "Lightning", "Colorless"],
          name: {
            en: "Mega Shock",
            ja: "メガショック",
            fr: "Méga choc",
            de: "Mega -Schock",
            es: "Mega Choque",
            it: "Mega shock",
            pt: "Mega choque",
          },
          effect: {
            en: "Flip a coin. If tails, Lt. Surge's Magneton does 20 damage to itself.",
            ja: "コインをひっくり返します。 Tailsの場合、SurgeのMagneton中tはそれ自体に20のダメージを与えます。",
            fr: "Retourner une pièce. Si Tails, le lieutenant Magneton's Magneton se fait 20 dégâts.",
            de: "Eine Münze drehen. Wenn Tails, Magneton von Lt. Surge an sich selbst schädigt sich 20.",
            es: "Voltea una moneda. Si Tails, el Magneton del teniente Surge hace 20 daños a sí mismo.",
            it: "Capovolgi una moneta. Se Tails, il magneton di Ten. Surge fa 20 danni a se stesso.",
            pt: "Vire uma moeda. Se a cauda, o magneton do tenente Surge causar 20 danos a si mesmo.",
          },
          damage: 50,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
      ],
};
