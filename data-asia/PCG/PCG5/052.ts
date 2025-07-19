import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Golem",
         ja: "ゴーレム",
         fr: "Golem",
         de: "Golem",
         es: "Golem",
         it: "GOLEM",
         pt: "Golem",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [76],
      hp: 120,
      types: ["Fighting"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Mend",
            ja: "修理",
            fr: "Réparer",
            de: "Heilen",
            es: "Remiendo",
            it: "Ripara",
            pt: "Conserto",
          },
          effect: {
            en: "Search your discard pile for a Fighting Energy card and attach it to Golem. If you do, remove 2 damage counters from Golem.",
            ja: "ファイティングエネルギーカードを廃棄することを検索し、ゴーレムに添付してください。そうする場合は、Golemから2つのダメージカウンターを削除します。",
            fr: "Recherchez votre tas de défausse pour une carte d'énergie de combat et attachez-la à Golem. Si vous le faites, retirez 2 compteurs de dégâts de Golem.",
            de: "Suchen Sie Ihren Abwurfstapel nach einer Kampfsenergiekarte und befestigen Sie sie an Golem. Wenn Sie dies tun, entfernen Sie 2 Schadenszähler aus Golem.",
            es: "Busque en su pila de descarte para una tarjeta de energía de lucha y adjuntarla a Golem. Si lo hace, elimine 2 contadores de daño de Golem.",
            it: "Cerca al tuo mucchio di scarti per una carta di energia di combattimento e attaccalo a Golem. Se lo fai, rimuovi 2 contatori di danno da Golem.",
            pt: "Pesquise sua pilha de descarte por um cartão de energia de combate e anexe -o ao Golem. Se o fizer, remova 2 contadores de danos do Golem.",
          },
        },
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Enraged Linear Attack",
            ja: "激怒した線形攻撃",
            fr: "Attaque linéaire enragée",
            de: "Wütender linearer Angriff",
            es: "Ataque lineal enfurecido",
            it: "Attacco lineare infuriato",
            pt: "Ataque linear enfurecido",
          },
          effect: {
            en: "Choose 1 of your opponent's Pokemon. This attack does 10 damage for each damage counter on Golem to that Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手のポケモンを1つ選択します。この攻撃は、ゴーレムの各ダメージカウンターでそのポケモンに対して10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Choisissez 1 du pokemon de votre adversaire. Cette attaque fait 10 dégâts pour chaque compteur de dégâts sur Golem à ce Pokémon. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wählen Sie 1 des Pokémon Ihres Gegners. Dieser Angriff schädigt 10 Schäden für jeden Schadenschalter am Golem zu diesem Pokémon. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Elija 1 de Pokémon de tu oponente. Este ataque hace 10 daños por cada mostrador de daño en Golem a ese Pokémon. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Scegli 1 Pokemon del tuo avversario. Questo attacco infligge 10 danni per ciascun contatore di danni su Golem a quel Pokemon. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Escolha 1 do Pokémon do seu oponente. Este ataque causa 10 danos para cada balcão de danos em Golem a esse Pokémon. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
        },
        {
          cost: ["Fighting", "Fighting", "Colorless", "Colorless"],
          name: {
            en: "Rock Tumble",
            ja: "岩の転倒",
            fr: "Rochers",
            de: "Felswäsche",
            es: "Caída de roca",
            it: "Tumble di roccia",
            pt: "Rock Tumble",
          },
          effect: {
            en: "This attack's damage isn't affected by Resistance.",
            ja: "この攻撃の損傷は抵抗の影響を受けません。",
            fr: "Les dégâts de cette attaque ne sont pas affectés par la résistance.",
            de: "Der Schaden dieses Angriffs ist nicht durch Widerstand beeinflusst.",
            es: "El daño de este ataque no se ve afectado por la resistencia.",
            it: "Il danno di questo attacco non è influenzato dalla resistenza.",
            pt: "O dano desse ataque não é afetado pela resistência.",
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
