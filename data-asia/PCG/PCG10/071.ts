import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Slaking",
         ja: "スレーキング",
         fr: "Échantillonnage",
         de: "Ablösen",
         es: "Esclavitud",
         it: "Slacing",
         pt: "Matar",
      },

      rarity: "Unknown",
      category: "Pokemon",
      dexId: [289],
      hp: 120,
      types: ["Colorless"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Lazy",
            ja: "怠け者",
            fr: "Paresseux",
            de: "Faul",
            es: "Perezoso",
            it: "Pigro",
            pt: "Preguiçoso",
          },
          effect: {
            en: "As long as Slaking is your Active PokÃ©mon, your opponent's PokÃ©mon can't use any PokÃ©-Powers.",
            ja: "スレーキングがあなたのアクティブなポカモンである限り、あなたの対戦相手のポカモンはPokã©-Powersを使用することはできません。",
            fr: "Tant que le skink est votre poké actif, le pokã © mon de votre adversaire ne peut utiliser aucun pokã © -Powers.",
            de: "Solange das Ablagerungen Ihr aktiver Poké Mon Mon ist, kann der Poké-Mong Ihres Gegners keine Poké-Wagen verwenden.",
            es: "Mientras se asumirá su Poké Mon activo, el Poké Mon de tu oponente no puede usar ninguna potencia de Poké.",
            it: "Fintanto che è schiaffeggiare il tuo poké attivo, il poké del tuo avversario non può usare alcun poké-powers.",
            pt: "Enquanto a matança for a sua picada ativa, o Poké Mon do seu oponente não pode usar nenhum Poké-Powers.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
          name: {
            en: "Critical Move",
            ja: "批判的な動き",
            fr: "Mouvement critique",
            de: "Kritischer Schritt",
            es: "Movimiento crítico",
            it: "Mossa critica",
            pt: "Movimento crítico",
          },
          effect: {
            en: "Discard a basic Energy card attached to Slaking or this attack does nothing. Slaking can't attack during your next turn.",
            ja: "スレーキングに取り付けられた基本的なエネルギーカードを廃棄するか、この攻撃は何もしません。スレーキングは次のターン中に攻撃することはできません。",
            fr: "Jeter une carte d'énergie de base attachée à l'échantillonnage ou cette attaque ne fait rien. Le glissement ne peut pas attaquer pendant votre prochain tour.",
            de: "Verwerfen Sie eine grundlegende Energiekarte, die mit dem Ablösen verbunden ist, oder dieser Angriff tut nichts. Das Abnehmen kann in Ihrer nächsten Kurve nicht angreifen.",
            es: "Deseche una tarjeta de energía básica unida a la asa o este ataque no hace nada. La esclava no puede atacar durante tu próximo turno.",
            it: "Scartare una scheda di energia di base collegata allo schiaffeggiare o questo attacco non fa nulla. Slacking non può attaccare durante il tuo prossimo turno.",
            pt: "Descarte um cartão de energia básico ligado à matança ou esse ataque não faz nada. A matança não pode atacar durante o seu próximo turno.",
          },
          damage: 100,
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "normal",
        },
      ],
};
