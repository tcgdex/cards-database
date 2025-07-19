import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Slowking",
         ja: "スローキング",
         fr: "Ralentissement",
         de: "Langsamer",
         es: "Lento",
         it: "Rallentamento",
         pt: "Desacelerar",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [199],
      hp: 80,
      types: ["Water"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Prize Shift",
            ja: "賞シフト",
            fr: "Changement de prix",
            de: "Preisverschiebung",
            es: "Turno de premio",
            it: "Shift a premio",
            pt: "Mudança de prêmio",
          },
          effect: {
            en: "Once during your turn (before your attack), you may choose a card from your hand and put it as a Prize card face up. If you do, choose 1 of your face-down Prize cards without looking and put it into your hand. This power can't be used if Slowking is affected by a Special Condition or if all of your Prize cards are face up.",
            ja: "ターン中に（攻撃の前に）、手からカードを選択して、賞品カードを表面に置くことができます。そうした場合は、見ずに顔を下ろした賞品を1枚選択して、手に入れてください。スローキングが特別な状態の影響を受けている場合、またはすべての賞品が表面している場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez choisir une carte dans votre main et la mettre en face de la carte de prix. Si vous le faites, choisissez 1 de vos cartes de prix face-à-tête sans la regarder et la mettre dans votre main. Cette puissance ne peut pas être utilisée si le ralentissement est affecté par une condition spéciale ou si toutes vos cartes de prix sont face à face.",
            de: "Sobald Sie während Ihres Zuges (vor Ihrem Angriff) sind, können Sie eine Karte von Ihrer Hand auswählen und sie als Preiskarte aufstellen. Wenn Sie dies tun, wählen Sie 1 Ihrer Preisträgerkarten, ohne sie zu schauen, und legen Sie sie in Ihre Hand. Diese Kraft kann nicht verwendet werden, wenn das langsame Zustand durch einen besonderen Zustand beeinflusst wird oder wenn alle Ihre Preiskarten konfrontiert sind.",
            es: "Una vez durante su turno (antes de su ataque), puede elegir una carta de su mano y ponerla como una tarjeta de premio boca arriba. Si lo hace, elija 1 de sus tarjetas de premio boca abajo sin mirar y póngalas en tu mano. Esta potencia no se puede usar si la lenta se ve afectada por una condición especial o si todas las tarjetas de su premio están boca arriba.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), puoi scegliere una carta dalla tua mano e metterla come una carta premio. Se lo fai, scegli 1 delle tue carte premio a faccia in giù senza guardarle e metterle in mano. Questa potenza non può essere utilizzata se il rallentamento è influenzato da una condizione speciale o se tutte le carte premio sono fatti in su.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode escolher um cartão da sua mão e colocá -lo como um cartão de prêmio com face para cima. Se o fizer, escolha 1 de seus cartões de prêmios voltados para baixo sem olhar e coloque-o em sua mão. Esse poder não pode ser usado se a desaceleração for afetada por uma condição especial ou se todos os seus cartões de prêmios estiverem com face para cima.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Psychic Option",
            ja: "サイキックオプション",
            fr: "Option psychique",
            de: "Psychische Option",
            es: "Opción psíquica",
            it: "Opzione psichica",
            pt: "Opção psíquica",
          },
          effect: {
            en: "If Slowking has a Water Energy card attached to it, this attack does 20 damage plus 20 more damage. If Slowking has a Psychic Energy card attached to it, discard a Special Energy card attached to the Defending Pokemon, if any.",
            ja: "スローキングに水エネルギーカードが付いている場合、この攻撃は20ダメージに加えて20ダメージを与えます。 Slowkingにサイキックエネルギーカードが付いている場合は、防御ポケモンに取り付けられた特別なエネルギーカードを捨ててください。",
            fr: "Si le ralentissement a une carte d'énergie de l'eau qui y est attachée, cette attaque fait 20 dégâts plus 20 dégâts supplémentaires. Si le ralentissement a une carte d'énergie psychique qui y est attachée, jetez une carte d'énergie spéciale attachée au Pokémon en défense, le cas échéant.",
            de: "Wenn Slowking eine Wasserergiekarte befindet, enthält dieser Angriff 20 Schaden zuzüglich 20 weitere Schäden. Wenn Slowking eine psychische Energiekarte an sich hat, verwerfen Sie eine spezielle Energiekarte, die dem verteidigenden Pokemon angebracht ist, falls vorhanden.",
            es: "Si Slowking tiene una tarjeta de energía de agua unida, este ataque hace 20 daños más 20 más de daño. Si Slowking tiene una tarjeta de energía psíquica adjunta, deseche una tarjeta de energía especial unida al Pokémon defensor, si lo hay.",
            it: "Se il rallentatore ha una carta di energia idrica attaccata ad essa, questo attacco infligge 20 danni più 20 danni. Se Slowking ha una carta di energia psichica attaccata ad essa, scartare una speciale carta di energia collegata al Pokemon in difesa, se presente.",
            pt: "Se o SlowKing tiver um cartão de energia d'água ligado a ele, esse ataque causará 20 danos mais 20 danos. Se o SlowKing tiver um cartão de energia psíquica anexado a ele, descarte um cartão de energia especial conectado ao Pokémon defensor, se houver.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
