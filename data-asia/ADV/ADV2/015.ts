import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
         en: "Golduck",
         ja: "ゴルダック",
         fr: "Golduck",
         de: "Golduck",
         es: "Dorado",
         it: "Golduck",
         pt: "Golduck",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [55],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Chaos Flash",
            ja: "カオスフラッシュ",
            fr: "Flash du chaos",
            de: "Chaos Blitz",
            es: "Caos flash",
            it: "Chaos Flash",
            pt: "Caos Flash",
          },
          effect: {
            en: "Once during your turn (before your attack), if Golduck is your Active PokÃ©mon, you may flip a coin. If heads, the Defending PokÃ©mon (choose 1 if there are 2) is now Confused. This power can't be used if Golduck is affected by a Special Condition.",
            ja: "ターン中（攻撃の前に）一度、ゴルダックがあなたのアクティブなポケモンである場合、コインをひっくり返すことができます。頭の場合、防御するポカモン（2つある場合は1を選択してください）が混乱します。 Golduckが特別な状態の影響を受けている場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), si Golduck est votre poké actif, vous pouvez retourner une pièce. Si les têtes, le Pokã © lun en défense (choisissez 1 s'il y en a 2) est désormais confus. Cette puissance ne peut pas être utilisée si Golduck est affecté par une condition spéciale.",
            de: "Sobald Sie während Ihres Zuges (vor Ihrem Angriff), wenn Golduck Ihr aktiver Poké Mon Mon Mon ist, können Sie eine Münze umdrehen. Wenn der Kopf ist, ist der verteidigende Poké Mon (Wählen Sie 1, wenn 2) verwirrt ist. Diese Kraft kann nicht verwendet werden, wenn Golduck von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno (antes de su ataque), si Golduck es su Poké Mon activo, puede voltear una moneda. Si se dirige, el Poké Mon (elige 1 si hay 2) ahora está confundido. Esta potencia no se puede usar si Golduck se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), se Golduck è il tuo poké attivo, puoi capovolgere una moneta. Se le teste, il poké difensore (scegli 1 se ce ne sono 2) è ora confuso. Questa potenza non può essere utilizzata se Golduck è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), se Golduck for o seu Poké ativo, você pode virar uma moeda. Se as cabeças, o Poké Mon atual (escolha 1 se houver 2) agora está confuso. Esse poder não pode ser usado se Golduck for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Water", "Psychic"],
          name: {
            en: "Special Blow",
            ja: "特別な打撃",
            fr: "Coup spécial",
            de: "Besonderer Schlag",
            es: "Golpe especial",
            it: "Colpo speciale",
            pt: "Golpe especial",
          },
          effect: {
            en: "If the Defending Pokemon has any Special Energy cards attached to it, this attack does 30 damage plus 40 more damage.",
            ja: "ディフェンディングポケモンに特別なエネルギーカードが付いている場合、この攻撃は30ダメージに加えて40ダメージを与えます。",
            fr: "Si le Pokémon en défense a des cartes d'énergie spéciales qui y sont attachées, cette attaque fait 30 dégâts plus 40 dégâts supplémentaires.",
            de: "Wenn das verteidigende Pokemon spezielle Energiekarten mit sich bringt, verursacht dieser Angriff 30 Schaden zuzüglich 40 weitere Schäden.",
            es: "Si el Pokémon defensor tiene alguna carta de energía especial adjunta, este ataque hace 30 daños más 40 daños más.",
            it: "Se il Pokemon in difesa ha schede energetiche speciali ad esso collegate, questo attacco infligge 30 danni più 40 danni.",
            pt: "Se o Pokémon atual tiver algum cartão de energia especial anexado a ele, esse ataque causará 30 danos mais 40 danos.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
      ],
};
