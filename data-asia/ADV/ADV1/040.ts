import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
         en: "Swellow",
         ja: "スウラー",
         fr: "Sombrer",
         de: "Swellow",
         es: "Brillo",
         it: "Taswello",
         pt: "Swellow",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [277],
      hp: 70,
      types: ["Colorless"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Drive Off",
            ja: "ドライブします",
            fr: "Parcourir",
            de: "Losfahren",
            es: "Ahuyentar",
            it: "Scatene",
            pt: "Saia",
          },
          effect: {
            en: "Once during your turn (before your attack), if Swellow is your Active PokÃ©mon, you may switch 1 of the Defending PokÃ©mon with 1 of your opponent's Benched PokÃ©mon. Your opponent picks the Benched PokÃ©mon to switch. This power can't be used if Swellow is affected by a Special Condition.",
            ja: "ターン中（攻撃の前に）、スウェローがあなたのアクティブなポカモンの場合、敵の1つのベンチ付きポカモンと1つのディフェンディングポカモンを切り替えることができます。対戦相手は、ベンチ付きのPokã©Monを切り替えます。 Swelloが特別な状態の影響を受けている場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), si Swellow est votre poké actif, vous pouvez changer 1 des Poké en défense avec 1 des Poké bancés de votre adversaire. Votre adversaire choisit le poké banc pour changer. Cette puissance ne peut pas être utilisée si Swellow est affecté par une condition spéciale.",
            de: "Sobald Sie während Ihres Zuges (vor Ihrem Angriff) sind, können Sie 1 des verteidigenden Poké Mons mit einem der Bank -Poké -Mong -Mone -Poké -Mone -Poké -Mons -Poké -Mons (vor Ihrem Angriff) einmal einteilen. Ihr Gegner wählt den Bank -Poké Mon Mon, um zu wechseln. Diese Kraft kann nicht verwendet werden, wenn Swellow von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno (antes de su ataque), si Swellow es su Poké Mon activo, puede cambiar 1 del Poké Defendente con 1 de la banca de su oponente. Tu oponente elige el Poké Mon para cambiar. Esta potencia no se puede usar si SWellow se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), se Swellow è il tuo poké attivo, puoi cambiare 1 del poké difendente con 1 del poké del tuo avversario. Il tuo avversario raccoglie il pokã © mon per cambiare. Questa potenza non può essere utilizzata se Swellow è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), se Swellow for o seu Poké de Mon ativo, você poderá trocar 1 do Poké -Mon atual com 1 do Poké Mon em bancada do seu oponente. Seu oponente escolhe o Poké Mon em bancada para mudar. Esse poder não pode ser usado se Swellow for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Wing Attack",
            ja: "翼攻撃",
            fr: "Attaque d'aile",
            de: "Flügelangriff",
            es: "Ataque del ala",
            it: "Attacco dell'ala",
            pt: "Ataque de asa",
          },
          damage: 30,
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
