import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
         en: "Aggron ex",
         ja: "Aggron Ex",
         fr: "Aggron ex",
         de: "Aggron Ex",
         es: "Aggron ex",
         it: "Aggron Ex",
         pt: "Aggron ex",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [306],
      hp: 150,
      types: ["Metal"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Intimidating Armor",
            ja: "威圧的な鎧",
            fr: "Armure intimidante",
            de: "Einschüchterndes Rüstungen",
            es: "Armadura intimidante",
            it: "Armatura intimidatoria",
            pt: "Armadura intimidadora",
          },
          effect: {
            en: "As long as Aggron ex is your Active PokÃ©mon, your opponent's Basic PokÃ©mon can't attack or use any PokÃ©-Powers or PokÃ©-Bodies.",
            ja: "Aggron ExがあなたのアクティブなPokã©Monである限り、あなたの相手の基本的なPokã©Monは、Pokã©PowersまたはPokã©-Bodiesを攻撃または使用することはできません。",
            fr: "Tant qu'Aggron Ex est votre poké actif, le pokã © mon de base de votre adversaire ne peut pas attaquer ou utiliser aucun pokã © -Powers ou Pokã © -bodies.",
            de: "Solange Aggron EX Ihr aktiver Poké Mon Mon ist, kann der grundlegende Poké-Mong Ihres Gegners keine Poké-Wächter oder Poké-Boden angreifen oder verwenden.",
            es: "Mientras Aggron ex sea tu Poké Mon activo, el Poké Básico de tu oponente no puede atacar o usar Poké-POWERS o POKEM ©.",
            it: "Finché Aggron ex è il tuo poké attivo, il poké di base del tuo avversario non può attaccare o usare alcun poké-powers o poké-bodies.",
            pt: "Enquanto o Aggron Ex for o seu Poké de Mon ativo, o Poké Mon do seu oponente não pode atacar ou usar nenhum poço ou poké-bodies.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Split Bomb",
            ja: "分割爆弾",
            fr: "Bombe partagée",
            de: "Split Bombe",
            es: "Bomba dividida",
            it: "Bomba divisa",
            pt: "Bomba dividida",
          },
          effect: {
            en: "Choose 2 of your opponent's Pokemon. This attack does 30 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手のポケモンの2つを選択してください。この攻撃は、それぞれに30のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Choisissez 2 du Pokémon de votre adversaire. Cette attaque fait 30 dégâts à chacun d'eux. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wählen Sie 2 des Pokémon Ihres Gegners. Dieser Angriff schädigt jeden von ihnen 30. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Elija 2 del Pokémon de tu oponente. Este ataque hace 30 daños a cada uno de ellos. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Scegli 2 del Pokemon del tuo avversario. Questo attacco fa 30 danni a ciascuno di essi. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Escolha 2 do Pokémon do seu oponente. Este ataque causa 30 danos a cada um deles. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
        },
        {
          cost: ["Metal", "Metal", "Colorless", "Colorless"],
          name: {
            en: "Mega Burn",
            ja: "メガ・バーン",
            fr: "Méga brûlure",
            de: "Mega brennen",
            es: "Mega Burn",
            it: "Mega Burn",
            pt: "Mega queima",
          },
          effect: {
            en: "During your next turn, Aggron ex can't use Mega Burn.",
            ja: "次のターン中、Aggron ExはMega Burnを使用できません。",
            fr: "Pendant votre prochain tour, Aggron Ex ne peut pas utiliser Mega Burn.",
            de: "Während Ihres nächsten Kurses kann Aggron Ex Mega Burn nicht verwenden.",
            es: "Durante su próximo turno, Aggron Ex no puede usar Mega Burn.",
            it: "Durante il tuo prossimo turno, Aggron Ex non può usare Mega Burn.",
            pt: "Durante o seu próximo turno, o aggron ex não pode usar o Mega Burn.",
          },
          damage: 100,
        },
      ],

      retreat: 4,

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
