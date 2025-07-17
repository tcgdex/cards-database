import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
      set: Set,
      name: {
         en: "Pidgeot - 091/128",
         ja: "Pidgeot -091/128",
         fr: "Pidgeot - 091/128",
         de: "Pidgeot - 091/128",
         es: "Pidgeot - 091/128",
         it: "Pidgeot - 091/128",
         pt: "PIDGEOT - 091/128",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [18],
      hp: 80,
      types: ["Colorless"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Beating Wings",
            ja: "翼を鼓動します",
            fr: "Battre des ailes",
            de: "Flügel schlagen",
            es: "Beating Wings",
            it: "Battere le ali",
            pt: "Asas batendo",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, if Pidgeot is your Active Pokmon, you may shuffle 1 of your Benched Pokmon and all cards attached to it into your deck. This power can't be used if Pidgeot is affected by a Special Condition.",
            ja: "ターン中に（攻撃の前に）</em> </em>、PidgeotがアクティブなPokmonである場合、ベンチ付きPokmonの1つをシャッフルすることができます。すべてのカードがデッキに取り付けられます。 Pidgeotが特別な状態の影響を受ける場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, si Pidgeot est votre pokmon actif, vous pouvez mélanger 1 de votre pokmon bancaire et toutes les cartes qui y sont attachées dans votre deck. Cette puissance ne peut pas être utilisée si Pidgeot est affecté par une condition spéciale.",
            de: "Sobald Sie in Ihrem Zug <em> (vor Ihrem Angriff) </em>, wenn Pidgeot Ihr aktives Pokmon ist, können Sie 1 Ihres Bank -Pokmons und alle Karten, die an Ihr Deck angeschlossen sind, mischen. Diese Leistung kann nicht verwendet werden, wenn Pidgeot von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, si Pidgeot es su Pokmon activo, puede barajar 1 de su Pokmon de banca y todas las cartas unidas a su mazo. Esta potencia no se puede usar si Pidgeot se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, se Pidgeot è il tuo Pokmon attivo, puoi mescolare 1 del tuo Pokmon in panchina e tutte le carte attaccate nel tuo mazzo. Questa potenza non può essere utilizzata se Pidgeot è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, se o PIDGEOT for o seu Pokmon ativo, você poderá embaralhar 1 do seu Pokmon bancado e todas as cartas anexadas a ele no seu baralho. Esse poder não pode ser usado se o PIDGEOT for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Sharp Beak",
            ja: "シャープなくちばし",
            fr: "Bec acéré",
            de: "Scharfer Schnabel",
            es: "Pico agudo",
            it: "Becco affilato",
            pt: "Bico afiado",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 20 damage plus 30 more damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて30ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 20 dégâts plus 30 dégâts supplémentaires.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 20 Schäden plus 30 weitere Schäden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 20 daños más 30 más de daño.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 20 danni più 30 danni in più.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 20 danos mais 30 mais danos.",
          },
        },
      ],


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
