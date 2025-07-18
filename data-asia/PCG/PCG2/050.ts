import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Nosepass",
         ja: "ノセパス",
         fr: "Nosepass",
         de: "Noses",
         es: "Noseepass",
         it: "Nosepass",
         pt: "Narizpass",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [299],
      hp: 60,
      types: ["Fighting"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Magnetic Reversal",
            ja: "磁気反転",
            fr: "Inversion magnétique",
            de: "Magnetische Umkehrung",
            es: "Inversión magnética",
            it: "Inversione magnetica",
            pt: "Reversão magnética",
          },
          effect: {
            en: "Once during your turn (before your attack), if Nosepass is your Active PokÃ©mon, you may flip a coin. If heads, switch 1 of your opponent's Benched PokÃ©mon with 1 of the Defending PokÃ©mon. Your opponent chooses the Defending PokÃ©mon to switch. This power can't be used if Nosepass is affected by a Special Condition.",
            ja: "ターン中（攻撃の前）に一度、NosepassがアクティブなPokã©Monである場合、コインをひっくり返すことができます。頭の場合、対戦相手のベンチポカモンの1つを防御するポカモンの1つに切り替えます。対戦相手は、防御するポカモンを選択して切り替えます。 Nosepassが特別な状態の影響を受ける場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), si Nosepass est votre poké actif, vous pouvez retourner une pièce. Si les têtes, changez 1 des poké bancs de votre adversaire avec 1 des Poké en défense. Votre adversaire choisit le Poké en défense pour changer. Cette puissance ne peut pas être utilisée si NosePass est affectée par une condition spéciale.",
            de: "Einmal in Ihrem Zug (vor Ihrem Angriff), wenn Nosepass Ihr aktiver Poké Mon Mon ist, können Sie eine Münze umdrehen. Wenn Sie Köpfe haben, wechseln Sie 1 der Bank -Benched Poké Mon mit 1 der verteidigenden Poké Mon Mon. Ihr Gegner wählt den verteidigenden Poké Mon Mon, um zu wechseln. Diese Leistung kann nicht angewendet werden, wenn Noses von einem besonderen Zustand beeinflusst wird.",
            es: "Una vez durante su turno (antes de su ataque), si Nosepass es su Poké Mon activo, puede voltear una moneda. Si se dirige, cambie 1 de la banca de su oponente Poké Mon con 1 del Poké defensor. Tu oponente elige al Poké Mon defensor para cambiar. Esta potencia no se puede usar si Nosepass se ve afectada por una condición especial.",
            it: "Una volta durante il tuo turno (prima dell'attacco), se Nosepass è il tuo poké attivo, puoi capovolgere una moneta. Se le teste, cambia 1 del poké in panchina del tuo avversario con 1 del poké difensore. Il tuo avversario sceglie il poké in difesa da cambiare. Questa potenza non può essere utilizzata se Nosepass è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), se o nariz é o seu Poké ativo, você poderá virar uma moeda. Se as cabeças, alterne 1 do Poké Mon do seu oponente com 1 do Poké Mon. Seu oponente escolhe o Poké Mon em defesa para mudar. Esse poder não pode ser usado se o nariz for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Sharpen",
            ja: "シャープ",
            fr: "Aiguiser",
            de: "Schärfen",
            es: "Afilar",
            it: "Affilare",
            pt: "Afiado",
          },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
