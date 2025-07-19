import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Cacturne",
         ja: "サボテン",
         fr: "Cacurne",
         de: "Kakturne",
         es: "Cacturne",
         it: "Cacturne",
         pt: "Cacturne",
      },

      rarity: "Unknown",
      category: "Pokemon",
      dexId: [332],
      hp: 70,
      types: ["Darkness"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Poison Structure",
            ja: "毒物構造",
            fr: "Structure de poison",
            de: "Giftstruktur",
            es: "Estructura venenosa",
            it: "Struttura del veleno",
            pt: "Estrutura de veneno",
          },
          effect: {
            en: "Once during your turn (before your attack), if 82 is in play, you may choose 1 of the Defending PokÃ©mon. That PokÃ©mon is now Poisoned. This power can't be used if this PokÃ©mon is affected by a Special Condition.",
            ja: "ターン中（攻撃の前）に1回、82がプレイ中の場合は、防御するポカンの1つを選択できます。そのポカモンは現在毒されています。このポケモンが特別な状態の影響を受けている場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), si 82 est en jeu, vous pouvez choisir un des Poké en défense. Ce pokã © Mon est maintenant empoisonné. Cette puissance ne peut pas être utilisée si ce poké-mon est affecté par une condition spéciale.",
            de: "Sobald Sie während Ihres Zuges (vor Ihrem Angriff) sind, können Sie 1 der verteidigenden Poké Mon Mon auswählen, wenn 82 im Spiel ist. Dieser Poké Mon ist jetzt vergiftet. Diese Kraft kann nicht verwendet werden, wenn dieser Poké Mon von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno (antes de su ataque), si 82 está en juego, puede elegir 1 de la defensa de Poké Mon. Ese Poké Mon ahora está envenenado. Esta potencia no se puede usar si este Poké Mon se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), se 82 è in gioco, puoi scegliere 1 del Pokã © difensore. Quel poké mon è ora avvelenato. Questo potere non può essere usato se questo poké mon è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), se 82 estiver em jogo, você poderá escolher 1 do Poké -Mon. Esse poké é agora está envenenado. Esse poder não pode ser usado se esse Poké é afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Pin Missile",
            ja: "ピンミサイル",
            fr: "Missile à épingle",
            de: "Pin -Rakete",
            es: "Misil de alfiler",
            it: "Pin missile",
            pt: "PIN míssil",
          },
          effect: {
            en: "Flip 4 coins. This attack does 20 damage times the number of heads.",
            ja: "4コインをひっくり返します。この攻撃は、ヘッド数の20倍のダメージを与えます。",
            fr: "Flip 4 pièces. Cette attaque fait 20 dégâts de temps le nombre de têtes.",
            de: "Flip 4 Münzen. Dieser Angriff verursacht 20 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 4 monedas. Este ataque hace 20 veces el número de cabezas.",
            it: "Flip 4 monete. Questo attacco fa 20 danni il numero di teste.",
            pt: "Flip 4 moedas. Este ataque causa 20 danos vezes o número de cabeças.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
