import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Tropius",
         ja: "トロピウス",
         fr: "Tropius",
         de: "Tropius",
         es: "Tropio",
         it: "Tropio",
         pt: "Tropius",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [357],
      hp: 80,
      types: ["Grass"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Tropical Motion",
            ja: "熱帯運動",
            fr: "Mouvement tropical",
            de: "Tropenbewegung",
            es: "Movimiento tropical",
            it: "Movimento tropicale",
            pt: "Movimento tropical",
          },
          effect: {
            en: "As long as Tropius is your Active PokÃ©mon, your opponent's Active PokÃ©mon have no Resistance.",
            ja: "トロピウスがあなたのアクティブなポカモンである限り、あなたの対戦相手のアクティブなポケモンには抵抗がありません。",
            fr: "Tant que Tropius est votre poké actif, le pokã © mon actif de votre adversaire n'a aucune résistance.",
            de: "Solange Tropius Ihr aktiver Pokémon ist, hat der aktive Poké Mons Ihres Gegners keinen Widerstand.",
            es: "Mientras Tropius sea tu Poké Mon activo, el Poké activo de tu oponente no tiene resistencia.",
            it: "Finché Tropio è il tuo poké attivo, il poké attivo del tuo avversario non ha resistenza.",
            pt: "Enquanto Tropius for o seu Poké Mon ativo, o Poké Mon ativo do seu oponente não tem resistência.",
          },
      }],

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Miracle Blow",
            ja: "奇跡の打撃",
            fr: "Coup de miracle",
            de: "Wunderblas",
            es: "Golpe milagroso",
            it: "Miracolo",
            pt: "Milagre",
          },
          effect: {
            en: "Flip a coin. If heads, choose 1 Special Condition. The Defending Pokemon is now affected by that Special Condition.",
            ja: "コインをひっくり返します。頭の場合は、1つの特別な条件を選択します。防御ポケモンは現在、その特別な状態の影響を受けています。",
            fr: "Retourner une pièce. Si les têtes, choisissez 1 état spécial. Le Pokémon en défense est désormais affecté par cette condition spéciale.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, wählen Sie 1 besondere Bedingung. Das verteidigende Pokémon ist jetzt von dieser besonderen Erkrankung betroffen.",
            es: "Voltea una moneda. Si se dirige, elija 1 condición especial. El Pokémon defensor ahora se ve afectado por esa condición especial.",
            it: "Capovolgi una moneta. Se le teste, scegli 1 condizione speciale. Il Pokemon in carica è ora influenzato da quella condizione speciale.",
            pt: "Vire uma moeda. Se as cabeças, escolha 1 condição especial. O Pokémon atual agora é afetado por essa condição especial.",
          },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
          name: {
            en: "Stomp",
            ja: "踏みつけ",
            fr: "Piétiner",
            de: "Stomp",
            es: "Pisar muy fuerte",
            it: "Stomp",
            pt: "Stomp",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 40 damage plus 20 more damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は40ダメージに加えて20ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 40 dégâts plus 20 dégâts supplémentaires.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 40 Schäden plus 20 weitere Schäden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 40 daños más 20 más de daño.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 40 danni più 20 danni in più.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 40 danos mais 20 mais danos.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
