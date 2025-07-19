import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
         en: "Altaria ex (Delta Species)",
         ja: "altaria ex（デルタ種）",
         fr: "Altaria ex (espèce delta)",
         de: "Altaria ex (Delta -Arten)",
         es: "Altaria Ex (especie delta)",
         it: "Altaria Ex (Delta Species)",
         pt: "Altaria ex (espécie Delta)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [334],
      hp: 100,
      types: ["Water"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Extra Boost",
            ja: "余分なブースト",
            fr: "Coup de pouce supplémentaire",
            de: "Zusätzlicher Schub",
            es: "Impulso extra",
            it: "Spinta extra",
            pt: "Impulso extra",
          },
          effect: {
            en: "Once during your turn (before your attack), you may attach a basic Energy card from your hand to 1 of your Stage 2 PokÃ©mon-ex. This power can't be used if Altaria ex is affected by a Special Condition.",
            ja: "ターン中（攻撃の前）に一度、手からステージ2のPokã©Mon-Exの1つに基本的なエネルギーカードを添付することができます。 Altaria Exが特別な状態の影響を受ける場合、この電力は使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte d'énergie de base de votre main à 1 de votre étape 2 Pokã © Mon-EX. Ce pouvoir ne peut pas être utilisé si l'Altaria ex est affecté par une condition spéciale.",
            de: "Sobald Sie während Ihres Zuges (vor Ihrem Angriff) sind, können Sie eine grundlegende Energiekarte von Ihrer Hand an 1 Ihrer Stufe 2 Poké Mon-EX anbringen. Diese Leistung kann nicht verwendet werden, wenn Altaria EX von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno (antes de su ataque), puede adjuntar una tarjeta de energía básica desde su mano a 1 de su etapa 2 Poké Mon-Ex. Esta potencia no se puede usar si Altaria EX se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno (prima dell'attacco), puoi allegare una scheda di energia di base dalla tua mano a 1 del tuo stadio 2 Poké mon-ex. Questa potenza non può essere utilizzata se Altaria Ex è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode anexar um cartão de energia básico da sua mão a 1 do seu estágio 2 Poké Mon-Ex. Esse poder não pode ser usado se o Altaria ex for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Water", "Colorless", "Colorless"],
          name: {
            en: "Healing Light",
            ja: "癒しの光",
            fr: "Lumière de guérison",
            de: "Heilendes Licht",
            es: "Luz curativa",
            it: "Luce di guarigione",
            pt: "Luz de cura",
          },
          effect: {
            en: "Remove 1 damage counter from each of your Pokemon.",
            ja: "各ポケモンから1つのダメージカウンターを取り外します。",
            fr: "Retirez 1 compteur de dégâts de chacun de vos Pokémon.",
            de: "Entfernen Sie 1 Schadenschalter von jedem Ihrer Pokémon.",
            es: "Retire 1 contador de daño de cada uno de sus Pokémon.",
            it: "Rimuovi 1 contatore di danni da ciascuno dei tuoi Pokemon.",
            pt: "Remova 1 contador de danos de cada um dos seus Pokémon.",
          },
          damage: 60,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          subtype: "unlimited',
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
