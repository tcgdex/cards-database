import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
      set: Set,
      name: {
         en: "Salamence",
         ja: "サラメンス",
         fr: "Salamence",
         de: "Salamence",
         es: "Salamencia",
         it: "Salamenza",
         pt: "Salamence",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [373],
      hp: 120,
      types: ["Colorless"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Dragon Wind",
            ja: "ドラゴン風",
            fr: "Vent de dragon",
            de: "Drachenwind",
            es: "Viento de dragón",
            it: "Drago Wind",
            pt: "Vento do dragão",
          },
          effect: {
            en: "Once during your turn (before your attack), if Salamence is your Active PokÃ©mon, you may switch 1 of your opponent's Benched PokÃ©mon with 1 of the Defending PokÃ©mon. Your opponent chooses the Defending PokÃ©mon to switch. This power can't be used if Salamence is affected by a Special Condition.",
            ja: "ターン中（攻撃の前に）、サラマンスがアクティブなポカモンである場合、敵のベンチポカモンの1つを防御するポカンと交換することができます。対戦相手は、防御するポカモンを選択して切り替えます。サラメンスが特別な状態の影響を受ける場合、この電力は使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), si la salamence est votre poké actif, vous pouvez changer 1 des poké bancs de votre adversaire avec un poké en défense. Votre adversaire choisit le Poké en défense pour changer. Ce pouvoir ne peut pas être utilisé si la salamence est affectée par une condition spéciale.",
            de: "Sobald Sie während Ihres Zuges (vor Ihrem Angriff), wenn Salamence Ihr aktiver Poké Mon Mon Mon ist, können Sie 1 der Bank -Poké Mons mit 1 der verteidigenden Poké Mon Mon wechseln. Ihr Gegner wählt den verteidigenden Poké Mon Mon, um zu wechseln. Diese Kraft kann nicht angewendet werden, wenn das Salamenz von einem besonderen Zustand beeinflusst wird.",
            es: "Una vez durante su turno (antes de su ataque), si la salamencia es su Poké Mon activo, puede cambiar 1 de la banca de su oponente Poké Mon con 1 de la defensa Poké Mon. Tu oponente elige al Poké Mon defensor para cambiar. Esta potencia no se puede usar si la salamencia se ve afectada por una condición especial.",
            it: "Una volta durante il tuo turno (prima dell'attacco), se la salamence è il tuo poké attivo, puoi cambiare 1 del poké del tuo avversario con 1 del poké mon. Il tuo avversario sceglie il poké in difesa da cambiare. Questa potenza non può essere utilizzata se la salamence è influenzata da una condizione speciale.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), se a salamence for o seu Poké de Mon ativo, você poderá mudar 1 do Poké Mon de Banched do seu oponente com 1 do Poké Mon. Seu oponente escolhe o Poké Mon em defesa para mudar. Esse poder não pode ser usado se a salameência for afetada por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Agility",
            ja: "敏ility性",
            fr: "Agilité",
            de: "Beweglichkeit",
            es: "Agilidad",
            it: "Agilità",
            pt: "Agilidade",
          },
          effect: {
            en: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Salamence during your opponent's next turn.",
            ja: "コインをひっくり返します。頭の場合、対戦相手の次のターン中にサラメンスに行われた損害を含む攻撃のすべての影響を防ぎます。",
            fr: "Retourner une pièce. Si les têtes, empêchent tous les effets d'une attaque, y compris les dégâts, causés à la salamence lors du prochain tour de votre adversaire.",
            de: "Eine Münze drehen. Wenn Sie Köpfe sind, verhindern Sie alle Auswirkungen eines Angriffs, einschließlich Schäden, die während der nächsten Kurve Ihres Gegners zum Salamence angerichtet werden.",
            es: "Voltea una moneda. Si las cabezas, evitan todos los efectos de un ataque, incluido el daño, se realizan a la salamencia durante el próximo turno de tu oponente.",
            it: "Capovolgi una moneta. Se le teste, impediscono tutti gli effetti di un attacco, incluso il danno, fatto per la salamenzia durante il prossimo turno dell'avversario.",
            pt: "Vire uma moeda. Se as cabeças, impedem todos os efeitos de um ataque, incluindo danos, causados à salameência durante o próximo turno do seu oponente.",
          },
          damage: 20,
        },
        {
          cost: ["Fire", "Water", "Colorless", "Colorless"],
          name: {
            en: "Dragon Claw",
            ja: "ドラゴンクロー",
            fr: "Griffe de dragon",
            de: "Drachenklaue",
            es: "Garra de dragón",
            it: "Dragon Claw",
            pt: "Garra de dragão",
          },
          damage: 60,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
        {
          type: "holo",
          subtype: "unlimited",
        },
      ],
};
