import {Card} from "../../../interfaces"
import Set from "../PCG3"

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
            en: "Lazy Aura",
            ja: "怠zyなオーラ",
            fr: "Aura paresseuse",
            de: "Faule Aura",
            es: "Aura perezosa",
            it: "Aura pigra",
            pt: "Aura preguiçosa",
          },
          effect: {
            en: "As long as Slaking is your Active PokÃ©mon, any damage done by attacks from your opponent's PokÃ©mon-ex is reduced by 30 (before applying Weakness and Resistance).",
            ja: "スレーキングがあなたのアクティブなポカモンである限り、相手のpokã©mon-exからの攻撃によって与えられた損害は30減少します（脱力感と抵抗を適用する前に）。",
            fr: "Tant que le skink est votre poké actif, tout dommage causé par les attaques du pokã © lun-© de votre adversaire est réduit de 30 (avant d'appliquer une faiblesse et une résistance).",
            de: "Solange das Ablösen Ihr aktiver Poké Mon Mon Mon ist, wird alle Schäden durch Angriffe aus dem Poké Mon-EX Ihres Gegners um 30 reduziert (bevor Schwäche und Widerstand angewendet werden).",
            es: "Mientras se asumirá su Poké Mon activo, cualquier daño causado por los ataques del Poké de su oponente se reduce en 30 (antes de aplicar debilidad y resistencia).",
            it: "Fintanto che lo schiaffeggia è il tuo poké attivo, qualsiasi danno causato dagli attacchi del poké-ex del tuo avversario è ridotto di 30 (prima di applicare debolezza e resistenza).",
            pt: "Enquanto a matança é o seu Poké Mon ativo, qualquer dano causado por ataques do Poké Mon-Ex é reduzido em 30 (antes de aplicar fraqueza e resistência).",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Amnesia",
            ja: "健忘症",
            fr: "Amnésie",
            de: "Amnesie",
            es: "Amnesia",
            it: "Amnesia",
            pt: "Amnésia",
          },
          effect: {
            en: "Choose 1 of the Defending Pokemon's attacks. That Pokemon can't use that attack during your opponent's next turn.",
            ja: "防御ポケモンの攻撃の1つを選択します。そのポケモンは、相手の次のターン中にその攻撃を使用できません。",
            fr: "Choisissez 1 des attaques de Pokémon en défense. Ce Pokémon ne peut pas utiliser cette attaque lors du prochain tour de votre adversaire.",
            de: "Wählen Sie 1 der Angriffe des Verteidigungspokemons. Dieses Pokemon kann diesen Angriff in der nächsten Runde Ihres Gegners nicht verwenden.",
            es: "Elija 1 de los ataques defensores de Pokémon. Ese Pokémon no puede usar ese ataque durante el próximo turno de tu oponente.",
            it: "Scegli 1 degli attacchi del Pokemon in carica. Quel Pokemon non può usare quell'attacco durante il prossimo turno del tuo avversario.",
            pt: "Escolha 1 dos ataques de Pokémon em defesa. Esse Pokémon não pode usar esse ataque durante o próximo turno do seu oponente.",
          },
          damage: 20,
        },
        {
          cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
          name: {
            en: "Lazy Headbutt",
            ja: "怠惰なヘッドバット",
            fr: "Coup de tête paresseux",
            de: "Fauler Kopfbutt",
            es: "Cabezal perezoso",
            it: "Lanzy Headbutt",
            pt: "Cabeça preguiçosa",
          },
          effect: {
            en: "Slaking is now Asleep.",
            ja: "スレーキングは今眠っています。",
            fr: "Le skink est maintenant endormi.",
            de: "Das Ablösen schläft jetzt.",
            es: "La esclava ahora está dormida.",
            it: "Lo schiaffi è ora addormentato.",
            pt: "A queda agora está dormindo.",
          },
          damage: 70,
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
