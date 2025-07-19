import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Tangela",
         ja: "タンゲラ",
         fr: "Tangela",
         de: "TANGELA",
         es: "Tangela",
         it: "TANGELA",
         pt: "Tangela",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [114],
      hp: 60,
      types: ["Grass"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Reactive Healing",
            ja: "反応性癒し",
            fr: "Guérison réactif",
            de: "Reaktive Heilung",
            es: "Curación reactiva",
            it: "Guarigione reattiva",
            pt: "Cura reativa",
          },
          effect: {
            en: "Whenever you attach a React Energy card from your hand to Tangela, remove all damage counters from Tangela.",
            ja: "React Energyカードを手からTangelaに取り付けるときはいつでも、Tangelaからすべてのダメージカウンターを削除します。",
            fr: "Chaque fois que vous attachez une carte d'énergie React de votre main à Tangela, retirez tous les compteurs de dégâts de Tangela.",
            de: "Wenn Sie eine React -Energiekarte von Ihrer Hand an Tangela anbringen, entfernen Sie alle Schadenszähler von Tangela.",
            es: "Siempre que adjunte una tarjeta de energía React de su mano a Tangela, retire todos los contadores de daño de Tangela.",
            it: "Ogni volta che si collega una scheda di energia di reazione dalla mano a Tangola, rimuovere tutti i contatori di danno da Tangola.",
            pt: "Sempre que você anexar um cartão de energia do React da sua mão a Tangela, remova todos os contadores de danos de Tangela.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Entangling Vines",
            ja: "絡み合っているブドウ",
            fr: "Vignes enchevêtantes",
            de: "Reben verwickeln",
            es: "Enrolle las vides",
            it: "Le viti intrecciate",
            pt: "Emaranhando videiras",
          },
          effect: {
            en: "If the Defending Pokemon is a Basic Pokemon, that Pokemon can't attack during your opponent's next turn.",
            ja: "防御ポケモンが基本的なポケモンである場合、そのポケモンは相手の次のターン中に攻撃することはできません。",
            fr: "Si le Pokémon en défense est un Pokémon de base, ce Pokémon ne peut pas attaquer pendant le prochain tour de votre adversaire.",
            de: "Wenn das verteidigende Pokémon ein einfaches Pokémon ist, kann dieses Pokémon während der nächsten Runde Ihres Gegners nicht angreifen.",
            es: "Si el Pokémon defensor es un Pokémon básico, ese Pokémon no puede atacar durante el próximo turno de tu oponente.",
            it: "Se il Pokemon in carica è un Pokemon di base, quel Pokemon non può attaccare durante il prossimo turno del tuo avversario.",
            pt: "Se o Pokémon atual for um Pokémon básico, esse Pokemon não pode atacar durante o próximo turno do seu oponente.",
          },
          damage: 10,
        },
        {
          cost: ["Grass", "Colorless", "Colorless"],
          name: {
            en: "Gentle Wrap",
            ja: "穏やかなラップ",
            fr: "Enveloppe douce",
            de: "Sanfte Wrap",
            es: "Envoltura suave",
            it: "Avvolgimento delicato",
            pt: "Enrolamento suave",
          },
          effect: {
            en: "The Defending Pokemon can't retreat during your opponent's next turn.",
            ja: "防御するポケモンは、相手の次のターン中に退却することはできません。",
            fr: "Le Pokémon en défense ne peut pas se retirer pendant le prochain tour de votre adversaire.",
            de: "Das verteidigende Pokemon kann sich während der nächsten Runde Ihres Gegners nicht zurückziehen.",
            es: "El Pokémon defensor no puede retirarse durante el próximo turno de tu oponente.",
            it: "Il Pokemon in carica non può ritirarsi durante il prossimo turno del tuo avversario.",
            pt: "O Pokémon atual não pode recuar durante o próximo turno do seu oponente.",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
