import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
         en: "Dusclops",
         ja: "Dusclops",
         fr: "Dusclops",
         de: "Dusclops",
         es: "Dusclops",
         it: "Dusclops",
         pt: "DUSCLOPS",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [356],
      hp: 70,
      types: ["Psychic"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Cursed Glare",
            ja: "呪われたまぶしさ",
            fr: "Éblouissement maudit",
            de: "Fluchs Blendung",
            es: "Resplandor maldito",
            it: "Baglia maledetta",
            pt: "Brilho amaldiçoado",
          },
          effect: {
            en: "As long as Dusclops is your Active PokÃ©mon, your opponent can't attach any Special Energy cards (except for Darkness and Metal Energy cards) from his or her hand to his or her Active PokÃ©mon.",
            ja: "DusclopsがアクティブなPokã©Monである限り、相手は彼または彼女の手からアクティブなPokã©Monに特別なエネルギーカード（暗闇と金属のエネルギーカードを除く）を添付することはできません。",
            fr: "Tant que Dusclops est votre poké actif, votre adversaire ne peut attacher aucune carte d'énergie spéciale (à l'exception des cartes d'obscurité et d'énergie en métal) de sa main à son poké actif.",
            de: "Solange Dusclops Ihr aktiver Pokémon ist, kann Ihr Gegner keine speziellen Energiekarten (mit Ausnahme von Dunkelheit und Metallsenergiekarten) von seiner Hand an seinen aktiven Poké Mon anbringen.",
            es: "Mientras Dusclops sea tu Poké Mon activo, tu oponente no puede adjuntar ninguna carta de energía especial (excepto la oscuridad y las tarjetas de energía de metal) desde su mano hasta su activo Poké Mon.",
            it: "Finché Dusclops è il tuo Poké Active Poké, il tuo avversario non può attaccare alcuna speciale carte energetica (ad eccezione delle carte oscurità e dell'energia metallica) dalla sua mano alla propria poké mon.",
            pt: "Enquanto o Dusclops for o seu Poké de Mon ativo, seu oponente não pode anexar nenhum cartões de energia especiais (exceto a escuridão e os cartões de energia metálica) da mão dele ao seu Poké ativo.",
          },
      }],

      attacks: [
        {
          cost: ["Psychic", "Colorless"],
          name: {
            en: "Will-o'-the-wisp",
            ja: "will-o'-the-wisp",
            fr: "Will-o'-le-wisp",
            de: "Will-o'-the-wisp",
            es: "Will-o'-the-wisp",
            it: "Will-O'-The-Wisp",
            pt: "Will-o'-the-wisp",
          },
          damage: 30,
        },
        {
          cost: ["Psychic", "Psychic", "Colorless"],
          name: {
            en: "Psychic Shield",
            ja: "サイキックシールド",
            fr: "Bouclier psychique",
            de: "Psychischer Schild",
            es: "Escudo psíquico",
            it: "Scudo psichico",
            pt: "Escudo psíquico",
          },
          effect: {
            en: "Prevent all effects of attacks, including damage, done to Dusclops by your opponent's Pokemon-ex during your opponent's next turn.",
            ja: "対戦相手の次のターン中に、相手のポケモンエクスによるダスクロップに行われるダメージを含む攻撃のすべての影響を防ぎます。",
            fr: "Empêchez tous les effets des attaques, y compris les dégâts, causés à Dusclops par le Pokemon-Ex de votre adversaire pendant le prochain tour de votre adversaire.",
            de: "Verhindern Sie alle Auswirkungen von Angriffen, einschließlich Schäden, die durch die Pokemon-EX Ihres Gegners in der nächsten Runde Ihres Gegners an Dusclops durchgeführt werden.",
            es: "Evite todos los efectos de los ataques, incluido el daño, realizado a Dusclops por Pokemon-EX de tu oponente durante el próximo turno de tu oponente.",
            it: "Prevenire tutti gli effetti degli attacchi, inclusi i danni, fatti a Dusclops dal Pokemon-Ex del tuo avversario durante il prossimo turno del tuo avversario.",
            pt: "Evite todos os efeitos dos ataques, incluindo danos, causados ao Dusclops pelo Pokemon-Ex do seu oponente durante o próximo turno do seu oponente.",
          },
          damage: 50,
        },
      ],

      retreat: 1,

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
