import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Dragonite (Delta Species)",
         ja: "ドラゴナイト（デルタ種）",
         fr: "Dragonite (espèces delta)",
         de: "Dragonit (Delta -Arten)",
         es: "Dragonita (especie delta)",
         it: "Dragonite (Delta Species)",
         pt: "Dragonite (espécie Delta)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [149],
      hp: 100,
      types: ["Lightning"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Delta Charge",
            ja: "デルタ料金",
            fr: "Frais de delta",
            de: "Delta -Gebühr",
            es: "Delta Charge",
            it: "Delta Charge",
            pt: "Delta cobrança",
          },
          effect: {
            en: "Once during your turn (before your attack), you may attach a Lightning Energy card from your discard pile to 1 of your Benched PokÃ©mon. This power can't be used if Dragonite is affected by a Special Condition.",
            ja: "ターン中に（攻撃の前に）、廃棄の山からベンチポカモンに1枚の稲妻エネルギーカードを取り付けることができます。ドラゴナイトが特別な状態の影響を受ける場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte d'énergie Lightning de votre tas de défausse à 1 de votre poké banc. Cette puissance ne peut pas être utilisée si la dragonite est affectée par une condition spéciale.",
            de: "Sobald Sie während Ihres Zuges (vor Ihrem Angriff) sind, können Sie eine Blitzelenergiekarte von Ihrem Ablagerungsstapel an 1 Ihres Bank -Poké -Mons anbringen. Diese Kraft kann nicht verwendet werden, wenn Dragonit von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno (antes de su ataque), puede adjuntar una tarjeta de energía del rayo de su pila de descarte a 1 de su banca Poké Mon. Esta potencia no se puede usar si Dragonite se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), è possibile collegare una scheda di energia Lightning dalla pila di scarto a 1 del tuo poké mon. Questa potenza non può essere utilizzata se Dragonite è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você poderá anexar um cartão de energia de raios da pilha de descarte a 1 de seu Poké de bancado. Esse poder não pode ser usado se o Dragonite for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Lightning", "Colorless"],
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
            en: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Dragonite during your opponent's next turn.",
            ja: "コインをひっくり返します。頭の場合、対戦相手の次のターン中にドラゴナイトに行われたダメージを含む攻撃のすべての影響を防ぎます。",
            fr: "Retourner une pièce. Si les têtes, empêchent tous les effets d'une attaque, y compris les dégâts, faites à Dragonite pendant le prochain tour de votre adversaire.",
            de: "Eine Münze drehen. Wenn Sie Köpfe sind, verhindern Sie alle Auswirkungen eines Angriffs, einschließlich Schäden, der Dragonit während der nächsten Kurve Ihres Gegners angerichtet wurde.",
            es: "Voltea una moneda. Si las cabezas, evitan todos los efectos de un ataque, incluido el daño, hecho a Dragonite durante el próximo turno de tu oponente.",
            it: "Capovolgi una moneta. Se le teste, impediscono tutti gli effetti di un attacco, incluso il danno, fatto a Dragonite durante il turno successivo dell'avversario.",
            pt: "Vire uma moeda. Se as cabeças, impedem todos os efeitos de um ataque, incluindo danos, causados à Dragonite durante o próximo turno do seu oponente.",
          },
          damage: 30,
        },
        {
          cost: ["Lightning", "Metal", "Colorless", "Colorless"],
          name: {
            en: "Heavy Impact",
            ja: "重い衝撃",
            fr: "Impact",
            de: "Starke Auswirkungen",
            es: "Impacto",
            it: "Forte impatto",
            pt: "Impacto pesado",
          },
          damage: 70,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
