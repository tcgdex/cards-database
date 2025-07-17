import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
      set: Set,
      name: {
         en: "Lanturn - 044/087",
         ja: "ラントゥーン-044/087",
         fr: "Lanturn - 044/087",
         de: "Lanturn - 044/087",
         es: "Lanturn - 044/087",
         it: "Lanturn - 044/087",
         pt: "Lanturn - 044/087",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [171],
      hp: 80,
      types: ["Lightning"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Ion Coating",
            ja: "イオンコーティング",
            fr: "Revêtement ionique",
            de: "Ionenbeschichtung",
            es: "Revestimiento de iones",
            it: "Rivestimento ionico",
            pt: "Revestimento de íons",
          },
          effect: {
            en: "You may use this power once during each of your turns <em>(before your attack)</em>. All Lightning Energy attached to your Active Pokmon becomes Water Energy for the rest of your turn. (This effect ends if your Active Pokmon retreats or is returned to your hand.) This power can't be used if Lanturn is affected by a Special Condition.",
            ja: "このパワーを1回使用してください<em>（攻撃の前）</em>。アクティブなポクモンに取り付けられたすべての稲妻エネルギーは、残りのターンのために水エネルギーになります。 （この効果は、アクティブなPokmonが後退するか、手に戻された場合に終了します。）Lanturnが特別な状態の影響を受けている場合、このパワーは使用できません。",
            fr: "Vous pouvez utiliser cette puissance une fois pendant chacun de vos tours <em> (avant votre attaque) </em>. Toute l'énergie de foudre attachée à votre Pokmon actif devient l'énergie de l'eau pour le reste de votre tour. (Cet effet se termine si votre Pokmon actif se retire ou est renvoyé à votre main.) Cette puissance ne peut pas être utilisée si Lanturn est affecté par une condition spéciale.",
            de: "Sie können diese Kraft in jedem Ihrer Kurven einmal <em> (vor Ihrem Angriff) </em> anwenden. Alle an Ihrem aktiven Pokmon angebrachten Blitzenergie werden für den Rest Ihres Zuges zu Wasserergie. (Dieser Effekt endet, wenn Ihr aktiver Pokmon zurückzieht oder an Ihre Hand zurückgegeben wird.) Diese Leistung kann nicht angewendet werden, wenn der Lanturn von einem besonderen Zustand beeinflusst wird.",
            es: "Puede usar este poder una vez durante cada una de sus turnos <em> (antes de su ataque) </em>. Toda la energía del rayo unida a su Pokmon activo se convierte en energía de agua para el resto de su turno. (Este efecto termina si su Pokmon activo se retira o se devuelve a su mano). Esta potencia no se puede usar si Lanturn se ve afectado por una condición especial.",
            it: "Puoi usare questo potere una volta durante ciascuna delle tue curve <em> (prima del tuo attacco) </em>. Tutta l'energia dei fulmini attaccata al tuo Pokmon attivo diventa energia idrica per il resto del tuo turno. (Questo effetto termina se il tuo Pokmon attivo si ritira o viene restituito in mano.) Questa potenza non può essere utilizzata se Lanturn è influenzato da una condizione speciale.",
            pt: "Você pode usar esse poder uma vez durante cada uma das suas turnos <em> (antes do seu ataque) </em>. Toda energia de raios ligada ao seu Pokmon ativo se torna energia hídrica pelo resto da sua vez. (Este efeito termina se o seu Pokmon ativo retiro ou for devolvido à sua mão.) Essa potência não puder ser usada se Lanturn for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Electric Tackle",
            ja: "電気タックル",
            fr: "Tacle électrique",
            de: "Elektrisches Tackle",
            es: "Aparejo eléctrico",
            it: "Attrezzatura elettrica",
            pt: "Tackle elétrico",
          },
          effect: {
            en: "This attack does 20 damage plus 10 more damage for each Lightning Energy attached to Lanturn. Flip a coin. If tails, Lanturn does 10 damage to itself for each Lightning Energy attached to it.",
            ja: "この攻撃は、ラントゥルンに取り付けられた各稲妻エネルギーに対して20のダメージに加えて10ダメージを与えます。コインをひっくり返します。尾の場合、ラントゥルンは、それに取り付けられた各稲妻エネルギーに対してそれ自体に10ダメージを与えます。",
            fr: "Cette attaque fait 20 dégâts plus 10 dégâts supplémentaires pour chaque énergie de foudre attachée à Lanturn. Retourner une pièce. Si la queue, Lanturn se fait 10 dommages pour chaque énergie de foudre qui lui est attachée.",
            de: "Dieser Angriff verursacht 20 Schäden plus 10 weitere Schäden für jede Blitzergie, die an Lanturn angeschlossen ist. Eine Münze drehen. Wenn Schwänze, verursacht Lanturn für jede daran befestigte Blitzergie 10 Schäden an sich.",
            es: "Este ataque hace 20 daños más 10 daños más por cada energía de rayo unida a Lanturn. Voltea una moneda. Si Tails, Lanturn hace 10 daños por sí mismo por cada energía de rayo unida a ella.",
            it: "Questo attacco infligge 20 danni più 10 danni per ogni fulmine attaccata a Lanturn. Capovolgi una moneta. Se code, Lanturn fa 10 danni a se stesso per ogni energia di fulmine attaccata ad essa.",
            pt: "Este ataque causa 20 de dano mais 10 mais danos para cada energia de raios ligada a Lanturn. Vire uma moeda. Se as caudas, Lanturn causar 10 danos a si mesmo para cada energia de raio ligada a ele.",
          },
        },
      ],

      retreat: 1,

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
