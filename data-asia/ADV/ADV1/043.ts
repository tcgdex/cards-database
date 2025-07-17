import {Card} from "../../../interfaces"
import Set from "../ADV1"

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

      rarity: "Holo Rare",
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
            en: "As long as Slaking is your Active Pokémon, your opponent's Pokémon can't use any Poké-Powers.",
            ja: "スレーキングがアクティブなポケモンである限り、相手のポケモンはポケパワーを使用できません。",
            fr: "Tant que la glissement est votre Pokémon actif, les Pokémon de votre adversaire ne peuvent pas utiliser de poké-powers.",
            de: "Solange das Ablösen Ihr aktives Pokémon ist, kann das Pokémon Ihres Gegners keine Poké-Pächer verwenden.",
            es: "Mientras la ascendencia sea tu Pokémon activo, el Pokémon de tu oponente no puede usar Poké-Powers.",
            it: "Finché schiaffeggiare il tuo Pokémon attivo, i Pokémon del tuo avversario non possono usare alcun Poké-Powers.",
            pt: "Enquanto a matança for o seu Pokémon ativo, o Pokémon do seu oponente não pode usar nenhum poké.",
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
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
