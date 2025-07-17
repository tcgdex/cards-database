import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
      set: Set,
      name: {
         en: "Vileplume - 068/128",
         ja: "vileplume -068/128",
         fr: "Vileplume - 068/128",
         de: "Vileplume - 068/128",
         es: "Vileplume - 068/128",
         it: "Vileplume - 068/128",
         pt: "Vileplume - 068/128",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [45],
      hp: 90,
      types: ["Grass"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Poison Pollen",
            ja: "毒花粉",
            fr: "Pollen d'empoisonnement",
            de: "Giftpollen",
            es: "Polen de veneno",
            it: "Polline veleno",
            pt: "Pólen de veneno",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, you may flip a coin. If heads, the Defending Pokmon is now Poisoned. This power can't be used if Vileplume is affected by a Special Condition.",
            ja: "ターン中に（攻撃の前に）</em> </em>、コインをひっくり返すことができます。頭の場合、防御ポケモンは現在毒されています。 vileplumeが特別な状態の影響を受けている場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, vous pouvez retourner une pièce. Si les têtes, le Pokémon en défense est maintenant empoisonné. Cette puissance ne peut pas être utilisée si le vileplume est affecté par une condition spéciale.",
            de: "Sobald Sie in Ihrem Zug <em> (vor Ihrem Angriff) </em> sind, können Sie eine Münze umdrehen. Wenn Köpfe, ist das verteidigende Pokemon jetzt vergiftet. Diese Leistung kann nicht verwendet werden, wenn Vileplume von einem besonderen Zustand beeinflusst wird.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, puede voltear una moneda. Si se dirige, el Pokémon defensor ahora está envenenado. Esta potencia no se puede usar si Vileplume se ve afectada por una condición especial.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, puoi capovolgere una moneta. Se la testa, il Pokemon in carica è ora avvelenato. Questa potenza non può essere utilizzata se Vileplume è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, você pode virar uma moeda. Se as cabeças, o pokemon atual agora está envenenado. Esse poder não pode ser usado se o vileplume for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Grass", "Colorless"],
          name: {
            en: "Petal Dance",
            ja: "花びらのダンス",
            fr: "Danse de pétales",
            de: "Blütenstanz",
            es: "Baile de pétalos",
            it: "Danza del petalo",
            pt: "Dança de pétala",
          },
          effect: {
            en: "Flip 3 coins. This attack does 30 damage times the number of heads. Vileplume is now Confused.",
            ja: "3コインをフリップします。この攻撃は、ヘッド数の30回のダメージ時間を実行します。 vileplumeは混乱しています。",
            fr: "Flip 3 pièces. Cette attaque fait 30 dégâts de temps le nombre de têtes. Vileplume est maintenant confus.",
            de: "3 Münzen umdrehen. Dieser Angriff verursacht 30 Schadenszeiten der Anzahl der Köpfe. Vileplume ist jetzt verwirrt.",
            es: "Flip 3 monedas. Este ataque hace 30 veces el número de cabezas. Vileplume ahora está confundido.",
            it: "Flip 3 monete. Questo attacco fa 30 danni volte al numero di teste. Vileplume è ora confuso.",
            pt: "Flip 3 moedas. Este ataque causa 30 danos vezes o número de cabeças. Vileplume agora está confuso.",
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
