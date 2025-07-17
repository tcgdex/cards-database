import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
      set: Set,
      name: {
         en: "Meganium - 070/128",
         ja: "Meganium -070/128",
         fr: "Meganium - 070/128",
         de: "Meganium - 070/128",
         es: "Meganium - 070/128",
         it: "Meganium - 070/128",
         pt: "Meganium - 070/128",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [154],
      hp: 100,
      types: ["Grass"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Soothing Aroma",
            ja: "なだめるような香り",
            fr: "Arôme apaisant",
            de: "Beruhigender Aroma",
            es: "Aroma calmante",
            it: "Aroma rilassante",
            pt: "Aroma calmante",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, you may flip a coin. If heads, remove 1 damage counter from each of your Pokmon that has any. This power can't be used if Meganium is affected by a Special Condition.",
            ja: "ターン中に（攻撃の前に）</em> </em>、コインをひっくり返すことができます。頭の場合は、Pokmonのそれぞれから1つのダメージカウンターを1つのダメージカウンターを取り外します。メガニウムが特別な状態の影響を受けている場合、この電力は使用できません。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, vous pouvez retourner une pièce. Si les têtes, retirez 1 compteur de dégâts de chacun de votre pokmon qui en a. Ce pouvoir ne peut pas être utilisé si le méganium est affecté par une condition spéciale.",
            de: "Sobald Sie in Ihrem Zug <em> (vor Ihrem Angriff) </em> sind, können Sie eine Münze umdrehen. Wenn Sie Köpfe haben, entfernen Sie 1 Schadenschalter von jedem Ihrer Pokmon, der eine hat. Diese Kraft kann nicht angewendet werden, wenn Meganium von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, puede voltear una moneda. Si se dirige, retire 1 contador de daño de cada uno de sus Pokmon que tiene alguno. Este poder no se puede usar si Meganium se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, puoi capovolgere una moneta. Se la testa, rimuovi 1 contatore di danni da ciascuno dei Pokmon che ne ha. Questa potenza non può essere utilizzata se il meganium è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, você pode virar uma moeda. Se as cabeças, remova 1 contador de danos de cada um dos seus Pokmon que possui. Esse poder não pode ser usado se o meganium for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Grass", "Grass", "Colorless", "Colorless"],
          name: {
            en: "Poisonpowder",
            ja: "毒パウダー",
            fr: "Poudre empoisonnée",
            de: "Giftpulver",
            es: "Pozal de veneno",
            it: "Velenco",
            pt: "Poisonpowder",
          },
          effect: {
            en: "The Defending Pokemon is now Poisoned.",
            ja: "防御ポケモンは現在中毒になっています。",
            fr: "Le Pokémon en défense est maintenant empoisonné.",
            de: "Das verteidigende Pokemon ist jetzt vergiftet.",
            es: "El Pokémon defensor ahora está envenenado.",
            it: "Il Pokemon in carica è ora avvelenato.",
            pt: "O Pokémon atual agora está envenenado.",
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
          stamp: ["1st edition"],
        },
      ],
};
