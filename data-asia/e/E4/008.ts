import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Crobat - 008/088",
         ja: "CROBAT -008/088",
         fr: "CROBAT - 008/088",
         de: "Crobat - 008/088",
         es: "Crobat - 008/088",
         it: "Crobat - 008/088",
         pt: "CROBAT - 008/088",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [169],
      hp: 90,
      types: ["Grass"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Carry Off",
            ja: "キャリーオフ",
            fr: "Emporter",
            de: "Davontragen",
            es: "Llevarse",
            it: "Portarsi via",
            pt: "Realizar",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, you may flip a coin. If heads, look at your opponent's hand. If your opponent has any Baby Pokmon, Basic Pokmon, or Evolution cards there, choose 1 of them. Your opponent shuffles that card into his or her deck. This power can't be used if Crobat is affected by a Special Condition.",
            ja: "ターン中に（攻撃の前に）</em> </em>、コインをひっくり返すことができます。頭の場合は、相手の手を見てください。対戦相手がベビーポクモン、基本的なポクモン、または進化カードを持っている場合は、そのうち1枚を選択します。あなたの対戦相手はそのカードを彼または彼女のデッキにシャッフルします。クロバットが特別な状態の影響を受けている場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, vous pouvez retourner une pièce. Si la tête, regardez la main de votre adversaire. Si votre adversaire a un bébé Pokmon, des Pokmon de base ou des cartes d'évolution, choisissez 1 d'entre eux. Votre adversaire mélange cette carte dans son deck. Cette puissance ne peut pas être utilisée si Crobat est affecté par une condition spéciale.",
            de: "Sobald Sie in Ihrem Zug <em> (vor Ihrem Angriff) </em> sind, können Sie eine Münze umdrehen. Wenn Sie Köpfe haben, schauen Sie sich die Hand Ihres Gegners an. Wenn Ihr Gegner dort ein Baby -Pokmon, Basis -Pokmon oder Evolutionskarten hat, wählen Sie 1 davon. Dein Gegner mischt diese Karte in sein Deck. Diese Leistung kann nicht angewendet werden, wenn Crobat von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, puede voltear una moneda. Si se dirige, mira la mano de tu oponente. Si tu oponente tiene algún bebé Pokmon, Pokmon básico o tarjetas de evolución allí, elija 1 de ellas. Tu oponente baraja esa carta en su mazo. Esta potencia no se puede usar si Crobat se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, puoi capovolgere una moneta. Se testa, guarda la mano del tuo avversario. Se il tuo avversario ha delle carte Pokmon, Pokmon di base o Evolution lì, scegli 1 di esse. Il tuo avversario mescola quella carta nel suo mazzo. Questa potenza non può essere utilizzata se Crobat è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, você pode virar uma moeda. Se as cabeças, olhe para a mão do seu oponente. Se o seu oponente tiver algum bebê Pokmon, Pokmon básico ou cartões de evolução lá, escolha 1 deles. Seu oponente embaralha essa carta em seu deck. Esse poder não pode ser usado se o Crobat for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Grass", "Colorless", "Colorless"],
          name: {
            en: "Double Cross",
            ja: "ダブルクロス",
            fr: "Croix",
            de: "Doppelkreuz",
            es: "Doble cruz",
            it: "Doppia croce",
            pt: "Cruz duplo",
          },
          effect: {
            en: "Flip 2 coins. This attack does 40 damage times the number of heads. If both of them are tails, the Defending Pokemon is now Confused and Poisoned.",
            ja: "2つのコインをフリップします。この攻撃は、ヘッド数の40回のダメージ倍になります。両方が尾である場合、防御するポケモンは混乱し、毒されます。",
            fr: "Flip 2 pièces. Cette attaque fait 40 dégâts de temps le nombre de têtes. Si les deux sont des queues, le Pokémon en défense est maintenant confus et empoisonné.",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 40 Schadenszeiten der Anzahl der Köpfe. Wenn beide Schwänze sind, ist das verteidigende Pokémon jetzt verwirrt und vergiftet.",
            es: "Flip 2 monedas. Este ataque hace 40 veces el número de cabezas. Si ambos son colas, el Pokémon defensor ahora está confundido y envenenado.",
            it: "Flip 2 monete. Questo attacco fa 40 danni il numero di teste. Se entrambi sono code, il Pokemon in difesa è ora confuso e avvelenato.",
            pt: "Flip 2 moedas. Este ataque causa 40 danos vezes o número de cabeças. Se os dois são caudas, o pokemon atual agora está confuso e envenenado.",
          },
        },
      ],


};
