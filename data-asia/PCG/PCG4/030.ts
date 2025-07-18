import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Octillery",
         ja: "オクリリー",
         fr: "Octillerie",
         de: "Oktillerie",
         es: "Octillería",
         it: "Octillery",
         pt: "OCTLLERY",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [224],
      hp: 80,
      types: ["Water"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Super Suction Cups",
            ja: "スーパー吸引カップ",
            fr: "Super sous-ventouse",
            de: "Super Saugnäurebecher",
            es: "Super Suction Cups",
            it: "Super aspirazione",
            pt: "Super Cups de sucção",
          },
          effect: {
            en: "As long as Octillery is your Active PokÃ©mon, your opponent's PokÃ©mon can't retreat.",
            ja: "オクタイラがあなたのアクティブなポカモンである限り、あなたの相手のポカモンは退却することはできません。",
            fr: "Tant qu'Octillery est votre poké actif, le poké de votre adversaire ne peut pas se retirer.",
            de: "Solange Oktillerie Ihr aktiver Pokémon ist, kann sich der Poké -Mong Ihres Gegners nicht zurückziehen.",
            es: "Mientras Octillery sea tu Poké Mon activo, el Poké Mon de tu oponente no puede retirarse.",
            it: "Finché Octillery è il tuo poké attivo, il tuo avversario non può ritirarsi.",
            pt: "Enquanto o Octilery for o seu Poké de Mon ativo, o Poké Mon do seu oponente não pode recuar.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Standing By",
            ja: "立っている",
            fr: "Debout",
            de: "Stehst vorbei",
            es: "Apoyarse",
            it: "In piedi",
            pt: "De pé",
          },
          effect: {
            en: "Discard an Energy card attached to Octillery. During your next turn, Octillery's Pulse Blast attack's base damage is 120.",
            ja: "オクリリーに取り付けられたエネルギーカードを廃棄します。次のターン中に、八典のパルスブラスト攻撃のベースダメージは120です。",
            fr: "Jeter une carte d'énergie attachée à Octtillery. Au cours de votre prochain tour, les dégâts de base de l'attaque de Pulse Blast d'Octillery sont de 120.",
            de: "Legen Sie eine Energiekarte ab, die mit Oktillerie verbunden ist. Während Ihrer nächsten Kurve beträgt der Grundschaden von Octillery's Pulse Blast Attack 120.",
            es: "Deseche una tarjeta de energía unida a Octillery. Durante su próximo turno, el daño base del ataque Pulse Blast Attack de Octillery es 120.",
            it: "Scartare una carta energetica collegata all'ottillery. Durante il turno successivo, il danno base di Octallery Pulse Blast Attack è 120.",
            pt: "Descarte um cartão de energia anexado à Ottillery. Durante o seu próximo turno, o dano básico da Octillery Pulse Blast Attack é 120.",
          },
        },
        {
          cost: ["Water", "Colorless"],
          name: {
            en: "Pulse Blast",
            ja: "パルスブラスト",
            fr: "Explosion de pouls",
            de: "Puls -Explosion",
            es: "Explosión de pulso",
            it: "Pulse Blast",
            pt: "Explosão de pulso",
          },
          damage: 30,
        },
      ],

      retreat: 1,

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
